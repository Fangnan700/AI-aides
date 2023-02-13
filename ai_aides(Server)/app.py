from flask import *
import openai
import logging
from logging.handlers import TimedRotatingFileHandler
from datetime import datetime

app = Flask(__name__)

file_handler = TimedRotatingFileHandler('flask.log')
file_handler.setLevel(logging.INFO)
app.logger.setLevel(logging.INFO)
app.logger.addHandler(file_handler)

keys = []
with open('keys.json', 'r') as json_file:
    json_dict = json.load(json_file)
    for key in json_dict:
        keys.append(json_dict[key])

# openai.api_key = os.environ.get('OPENAI_API_KEY')
total = len(keys)
key_index = 0
openai.api_key = keys[key_index]
key_index += 1
used = 0

pre_question = ''
pre_answer = ''


@app.route('/', methods=('GET', 'POST'))
def index():
    return "ERROR"


@app.route('/send', methods=('GET', 'POST'))
def send():
    recv = request.json
    data = recv['content']

    global key_index
    global used
    global pre_question
    global pre_answer

    if pre_question != '' and len(pre_question) <= 30 and len(pre_answer) <= 30:
        msg = '刚才我说："' + pre_question + '"，你回答："' + pre_answer + '", 现在我说："' + data + '"'
    elif pre_question != '' and len(pre_question) <= 30:
        msg = '刚才我说："' + pre_question + '"，现在我说："' + data + '"'
    else:
        msg = data

    try:
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=msg + '.',
            temperature=0.8,
            n=1,
            max_tokens=2048
        )
        text = response.choices[0].text.strip()

        pre_question = data
        pre_answer = text

        if key_index >= len(keys):
            key_index = 0

        openai.api_key = keys[key_index]
        key_index += 1
        used += 1
        app.logger.info('\n----------' + str(datetime.now()) + '----------')
        app.logger.info('常规更换密钥：' + openai.api_key)
        return text

    except openai.error.APIError:
        if len(keys) != 0:

            if key_index >= len(keys):
                key_index = 0

            openai.api_key = keys[key_index]
            key_index += 1
            used += 1
            app.logger.error('\n----------' + str(datetime.now()) + '----------')
            app.logger.error('错误更换密钥：' + openai.api_key)

        return '服务器出了点问题，请稍后再试'


if __name__ == '__main__':
    app.run()
