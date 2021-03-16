from flask import Flask

def create_app():
	app = Flask(__name__, static_folder=None)

	from .api import api
	from .frontend import frontend

	app.register_blueprint(api, url_prefix="/api")
	app.register_blueprint(frontend)

	return app
