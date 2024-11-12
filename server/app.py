from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_restful import Api
import os
from flask_cors import CORS
from models import db
from resources import PropertyResource, ServiceResource, TestimonialResource, DiasporaResource, ContactMessageResource, LoginResource, SignupResource

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()
jwt = JWTManager()
api = Api()

def create_app():
    # Initialize the app
    app = Flask(__name__)

    CORS(app, resources={r"/*": {"origins": "*"}})
    # Load environment variables (if using .env file)
    from dotenv import load_dotenv
    load_dotenv()

    # Configure app
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI', 'sqlite:///db.sqlite')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your_secret_key')

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    jwt.init_app(app)
    api.init_app(app)

    # Register API resources (routes)

    api.add_resource(PropertyResource, '/properties', '/properties/<int:property_id>')
    api.add_resource(ServiceResource, '/services', '/services/<int:service_id>')
    api.add_resource(TestimonialResource, '/testimonials', '/testimonials/<int:testimonial_id>')
    api.add_resource(DiasporaResource, '/diaspora')
    api.add_resource(ContactMessageResource, '/contact/messages')
    api.add_resource(SignupResource, '/signup')  # Add Signup route
    api.add_resource(LoginResource, '/login')

    return app

# Add this block to ensure app is run when executing this file
if __name__ == '__main__':
    app = create_app()  # Create the app instance
    app.run(debug=True)  # Run the app with debugging enabled
