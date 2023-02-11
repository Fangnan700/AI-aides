from flask import *
import openai
import logging
from logging.handlers import TimedRotatingFileHandler
from datetime import datetime

app = Flask(__name__)

file_handler = TimedRotatingFileHandler('flask.log')
file_handler.setLevel(logging.ERROR)
app.logger.setLevel(logging.ERROR)
app.logger.addHandler(file_handler)

keys = []
with open('keys.json', 'r') as json_file:
    json_dict = json.load(json_file)
    for key in json_dict:
        keys.append(json_dict[key])

# openai.api_key = os.environ.get('OPENAI_API_KEY')
total = len(keys)
openai.api_key = keys.pop(0)
used = 0


@app.route('/', methods=('GET', 'POST'))
def index():
    return "ERROR"


@app.route('/send', methods=('GET', 'POST'))
def send():
    recv = request.json
    data = recv['content']

    try:
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=data + '.',
            temperature=0.8,
            n=1,
            max_tokens=2048
        )
        text = response.choices[0].text.strip()
        return text
    except openai.error.RateLimitError:
        if len(keys) != 0:
            openai.api_key = keys.pop(0)
            global used
            used += 1
            app.logger.error('\n----------' + str(datetime.now()) + '----------')
            app.logger.error('更换密钥：' + openai.api_key)
            app.logger.error('密钥消耗：' + str(used))
            app.logger.error('密钥余量：' + str(total - used))

        return '服务器出了点问题，请稍后再试'


if __name__ == '__main__':
    app.run()
