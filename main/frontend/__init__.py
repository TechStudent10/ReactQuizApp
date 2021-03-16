from flask import Blueprint, render_template

frontend = Blueprint('views', __name__, template_folder="templates", static_folder="static")

@frontend.route('/')
def index():
    return render_template('index.html')

@frontend.route('/about')
def about():
    return render_template('index.html')
