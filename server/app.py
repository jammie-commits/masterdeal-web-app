from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from resources import PropertyResource, ServiceResource, TestimonialResource, ContactMessageResource

# Initialize Flask app
app = Flask(__name__)

# Configuration for database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'  # Example SQLite database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)  # Initialize db with app
migrate = Migrate(app, db)  # Initialize migration with app

# Initialize the API
api = Api(app)

# Set up API endpoints
api.add_resource(PropertyResource, '/properties', '/properties/<int:property_id>')
api.add_resource(ServiceResource, '/services', '/services/<int:service_id>')
api.add_resource(TestimonialResource, '/testimonials', '/testimonials/<int:testimonial_id>')
api.add_resource(ContactMessageResource, '/contact_messages', '/contact_messages/<int:message_id>')

# Import models here to avoid circular imports
from models import Property, Service, Testimonial, ContactMessage

# Create all tables
with app.app_context():
    db.create_all()

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True, port=5000)
