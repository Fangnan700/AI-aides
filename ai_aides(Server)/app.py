from flask import *
from revChatGPT.V1 import Chatbot
from apscheduler.schedulers.background import BackgroundScheduler
import json
import uuid
import time

app = Flask(__name__)


# 机器人列表
chatbots = {}
chatbots_times = {}


def clear_outdated_bot():
    current_time = time.time()
    for token, create_time in chatbots_times.items():
        # 清除半小时前创建的机器人
        if current_time - create_time > 60*30:
            chatbots.get(token).clear_conversations()
            chatbots.pop(token)
            chatbots_times.pop(token)


scheduler = BackgroundScheduler()
scheduler.add_job(func=clear_outdated_bot, trigger='interval', seconds=60)


@app.route('/')
def index():
    response = {
        'code': '-1',
        'msg': 'Bad Request'
    }
    return json.dumps(response)


@app.route('/login', methods=['POST'])
def login():
    login_data = request.json['login_data']
    username = login_data['username']
    password = login_data['password']
    new_bot = Chatbot(config={
        'email': username,
        'password': password
    })

    # 生成用户token
    token = str(uuid.uuid4())
    create_time = time.time()

    chatbots[token] = new_bot
    chatbots_times[token] = create_time

    try:
        response = {
            'code': '1',
            'msg': '登录成功',
            'token': token
        }
        return json.dumps(response)
    except Exception:
        response = {
            'code': '-1',
            'msg': '登录失败'
        }
        return json.dumps(response)


@app.route('/chat', methods=['POST'])
def chat():
    token = request.json['token']
    if chatbots.get(token) is None:
        response = {
            'code': '0',
            'msg': '未登录'
        }
        return json.dumps(response)
    else:
        try:
            _chatbot = chatbots.get(token)
            content = request.json['content']
            text = ''
            for data in _chatbot.ask(content):
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
