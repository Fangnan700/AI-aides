from flask import *
from flask_cors import CORS
from revChatGPT.V1 import Chatbot
import redis
import json
import uuid
import pickle

app = Flask(__name__)
CORS(app, supports_credentials=True)

# Redis连接（如果连接失败，请将这里的localhost更改为宿主机中docker0对应的ip）
redis_pool = redis.ConnectionPool(host='localhost', port='6379', decode_responses=False)
redis_p = redis.Redis(host='localhost', port=6379, decode_responses=False)


chatbots = {}
chatbots_times = {}


@app.route('/')
def index():
    response = {
        'code': '-1',
        'msg': 'Bad Request'
    }
    return json.dumps(response)


# @app.route('/get_info')
# def get_bots_info():
#     count = 0
#     keys = redis_p.keys()
#     for key in keys:
#         if redis_p.get(key) is None:
#             redis_p.delete(key)
#         else:
#             count += 1
#     response = {
#         'bots_number': count
#     }
#     return json.dumps(response)
    

@app.route('/login', methods=['POST'])
def login():
    global chatbots
    global chatbots_times
    login_data = request.json['login_data']
    username = login_data['username']
    password = login_data['password']

    try:
        new_bot = Chatbot(config={
            'email': username,
            'password': password
        })
        
        new_bot.clear_conversations()

        # 生成用户token
        token = str(uuid.uuid4())
        redis_p.set(token, pickle.dumps(new_bot), 60 * 30)
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
    global chatbots
    global chatbots_times
    token = request.json['token']
    bot_str = redis_p.get(token)
    if bot_str is None:
        response = {
            'code': '0',
            'msg': '未登录'
        }
        return json.dumps(response)
    else:
        try:
            _chatbot = pickle.loads(bot_str)
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


if __name__ == '__main__':
    app.run()
