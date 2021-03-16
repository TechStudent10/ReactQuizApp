# IMPORTS
from flask import Flask, render_template, url_for
from api import api

# INITIALIZATION
app = Flask(__name__)
app.register_blueprint(api, url_prefix="/api")

# VIEWS
@app.route("/")
def index():
    return react()

@app.route("/about")
def about():
    return react()

# RUN FLASK
if __name__ == "__main__":
    app.run(debug=True)
