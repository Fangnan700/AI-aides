from flask import *
from revChatGPT.V1 import Chatbot
from apscheduler.schedulers.background import BackgroundScheduler
import json

app = Flask(__name__)

with open('config.json', 'r') as file:
    config = json.load(file)
    account = config['account']
    proxy = config['proxy']

if proxy is not None:
    chatbot = Chatbot(config={
        'email': account['email'],
        'password': account['password'],
        'proxy': proxy
    })
else:
    chatbot = Chatbot(config={
        'email': account['email'],
        'password': account['password']
    })


def clear_conversations():
    chatbot.clear_conversations()


scheduler = BackgroundScheduler()
scheduler.add_job(func=clear_conversations, trigger='interval', seconds=60*60)


@app.route('/')
def index():
    response = {
        'code': '-1',
        'msg': 'Bad Request'
    }
    return json.dumps(response)


@app.route('/reset', methods=['POST'])
def login_bot():
    global chatbot
    config_data = request.json['config_data']
    re_email = config_data['email']
    re_password = config_data['password']
    re_proxy = config_data['proxy']
    try:
        if re_proxy is not None:
            chatbot = Chatbot(config={
                'email': re_email,
                'password': re_password,
                'proxy': re_proxy
            })
        else:
            chatbot = Chatbot(config={
                'email': re_email,
                'password': re_password
            })
        response = {
            'code': '1',
            'msg': 'Chatbot is initialized.'
        }
        return json.dumps(response)
    except Exception:
        response = {
            'code': '-1',
            'msg': 'Chatbot initialize fail.'
        }
        return json.dumps(response)


@app.route('/chat', methods=['POST'])
def chat():
    global chatbot
    if chatbot is None:
        response = {
            'code': '0',
            'msg': 'Chatbot is not initialized.'
        }
        return json.dumps(response)
    else:
        try:
            content = request.json['content']
            text = ''
            for data in chatbot.ask(content):
                text = data['message']
            response = {
                'code': '1',
                'text': text
            }
            return json.dumps(response)
        except Exception:
            response = {
                'code': '-1',
                'text': '服务器出了点问题，稍后再试试吧～'
            }
            return json.dumps(response)


scheduler.start()

if __name__ == '__main__':
    app.run()
