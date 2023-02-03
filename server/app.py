
from flask import Flask

from routes.auth import bp as auth_bp
from routes.announces import bp as announces_bp
from routes.orders import bp as orders_bp
from routes.notifications import bp as notifications_bp
from routes.saved_announces import bp as saved_announces_bp
from routes.images import bp as images_bp
from routes.location import bp as location_bp
from routes.web import bp as web_bp
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SECRET_KEY'] = '004f2af45d3a4e161a7dd2d17fdae47f'
app.config['UPLOAD_FOLDER'] = "uploads"
app.config['DEBUG']=True
CORS(app)
app.register_blueprint(auth_bp)
app.register_blueprint(orders_bp)
app.register_blueprint(notifications_bp)
app.register_blueprint(saved_announces_bp)
app.register_blueprint(images_bp)
app.register_blueprint(announces_bp)
app.register_blueprint(location_bp)
app.register_blueprint(web_bp)
