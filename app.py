from flask import Flask, render_template
import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config():
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a long string with jib jab wallygog give a dog a cone'
    API_KEY = os.environ.get('API_KEY') or exit('Please set a global environnment API key')

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/')
def home():
    return render_template('index.html', API_KEY=Config.API_KEY)


if __name__ == '__main__':
    app.run(debug=True)
