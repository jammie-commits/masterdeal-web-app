from flask_restful import Resource, reqparse, request
from models import db, Property, Service, Testimonial, ContactMessage, Diaspora, User
import re
from flask_jwt_extended import create_access_token

# Utility function for email format validation
def is_valid_email(email):
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

# Property Parser
property_parser = reqparse.RequestParser()
property_parser.add_argument('title', type=str, required=True)
property_parser.add_argument('price', type=str, required=True)
property_parser.add_argument('description', type=str, required=True)
property_parser.add_argument('features', type=str, required=False)

# Service Parser
service_parser = reqparse.RequestParser()
service_parser.add_argument('title', type=str, required=True)
service_parser.add_argument('sub_title', type=str, required=True)

# Testimonial Parser
testimonial_parser = reqparse.RequestParser()
testimonial_parser.add_argument('user_name', type=str, required=True)
testimonial_parser.add_argument('destination_title', type=str, required=False)
testimonial_parser.add_argument('rating', type=float, required=True, help="Rating must be a float between 0 and 5.", action="store")
testimonial_parser.add_argument('comments', type=str, required=False)

# ContactMessage Parser
contact_parser = reqparse.RequestParser()
contact_parser.add_argument('name', type=str, required=True)
contact_parser.add_argument('email', type=str, required=True, help="Email is required.", action="store")
contact_parser.add_argument('message', type=str, required=True)

signup_parser = reqparse.RequestParser()
signup_parser.add_argument('username', type=str, required=True, help="Username is required")
signup_parser.add_argument('email', type=str, required=True, help="Email is required")
signup_parser.add_argument('password', type=str, required=True, help="Password is required")

login_parser = reqparse.RequestParser()
login_parser.add_argument('email', type=str, required=True, help="Email is required")
login_parser.add_argument('password', type=str, required=True, help="Password is required")


class SignupResource(Resource):
    def post(self):
        args = signup_parser.parse_args()
        username = args['username']
        email = args['email']
        password = args['password']

        # Check if email or username already exists
        if User.query.filter_by(email=email).first():
            return {"message": "Email already exists."}, 400
        if User.query.filter_by(username=username).first():
            return {"message": "Username already exists."}, 400

        # Create new user and hash the password
        new_user = User(username=username, email=email)
        new_user.set_password(password)

        db.session.add(new_user)
        db.session.commit()

        return {"message": "User created successfully!"}, 201


class LoginResource(Resource):
    def post(self):
        args = login_parser.parse_args()
        email = args['email']
        password = args['password']

        # Find the user by email
        user = User.query.filter_by(email=email).first()
        if not user or not user.check_password(password):
            return {"message": "Invalid credentials"}, 401

        # Generate a JWT token
        access_token = create_access_token(identity=user.id)
        
        return {"access_token": access_token}, 200

# Property Resource
class PropertyResource(Resource):
    def get(self, property_id=None):
        if property_id:
            property = Property.query.get(property_id)
            if not property:
                return {"message": "Property not found"}, 404
            return property.to_dict()
        else:
            properties = Property.query.all()
            return [property.to_dict() for property in properties]

    def post(self):
        args = property_parser.parse_args()
        new_property = Property(
            title=args['title'],
            price=args['price'],
            description=args['description'],
            features=args.get('features', '')
        )
        db.session.add(new_property)
        db.session.commit()
        return new_property.to_dict(), 201

    def put(self, property_id):
        property = Property.query.get(property_id)
        if not property:
            return {"message": "Property not found"}, 404
        args = property_parser.parse_args()
        property.title = args['title']
        property.price = args['price']
        property.description = args['description']
        property.features = args.get('features', '')
        db.session.commit()
        return property.to_dict()

    def delete(self, property_id):
        property = Property.query.get(property_id)
        if not property:
            return {"message": "Property not found"}, 404
        db.session.delete(property)
        db.session.commit()
        return {"message": "Property deleted successfully"}, 204

# Service Resource
class ServiceResource(Resource):
    def get(self, service_id=None):
        if service_id:
            service = Service.query.get(service_id)
            if not service:
                return {"message": "Service not found"}, 404
            return service.to_dict()
        else:
            services = Service.query.all()
            return [service.to_dict() for service in services]

    def post(self):
        args = service_parser.parse_args()
        new_service = Service(title=args['title'], sub_title=args['sub_title'])
        db.session.add(new_service)
        db.session.commit()
        return new_service.to_dict(), 201

# Testimonial Resource
class TestimonialResource(Resource):
    def get(self, testimonial_id=None):
        if testimonial_id:
            testimonial = Testimonial.query.get(testimonial_id)
            if not testimonial:
                return {"message": "Testimonial not found"}, 404
            return testimonial.to_dict()
        else:
            testimonials = Testimonial.query.all()
            return [testimonial.to_dict() for testimonial in testimonials]

    def post(self):
        args = testimonial_parser.parse_args()
        new_testimonial = Testimonial(
            user_name=args['user_name'],
            destination_title=args['destination_title'],
            rating=args['rating'],
            comments=args.get('comments', '')
        )
        db.session.add(new_testimonial)
        db.session.commit()
        return new_testimonial.to_dict(), 201

# ContactMessage Resource
class ContactMessageResource(Resource):
    def get(self, message_id=None):
        if message_id:
            message = ContactMessage.query.get(message_id)
            if not message:
                return {"message": "Message not found"}, 404
            return message.to_dict()
        else:
            messages = ContactMessage.query.all()
            return [message.to_dict() for message in messages]

    def post(self):
        args = contact_parser.parse_args()

        # Validate email manually
        email = args['email']
        if not is_valid_email(email):
            return {"message": "Invalid email format"}, 400
        
        new_message = ContactMessage(
            name=args['name'],
            email=email,
            message=args['message']
        )
        db.session.add(new_message)
        db.session.commit()
        return new_message.to_dict(), 201

# Diaspora Resource
class DiasporaResource(Resource):
    def get(self):
        # Fetch the diaspora guide from the database
        diaspora_guide = Diaspora.query.first()  # Assuming only one guide
        if not diaspora_guide:
            return {"message": "Diaspora guide not found"}, 404
        return diaspora_guide.to_dict()

    def put(self):
        # Update the diaspora guide with new data (for an admin or update process)
        args = request.get_json()

        diaspora_guide = Diaspora.query.first()
        if not diaspora_guide:
            return {"message": "Diaspora guide not found"}, 404

        diaspora_guide.title = args.get('title', diaspora_guide.title)
        diaspora_guide.content = args.get('content', diaspora_guide.content)
        diaspora_guide.contact_email = args.get('contact_email', diaspora_guide.contact_email)
        diaspora_guide.contact_phone = args.get('contact_phone', diaspora_guide.contact_phone)
        diaspora_guide.contact_whatsapp = args.get('contact_whatsapp', diaspora_guide.contact_whatsapp)

        db.session.commit()

        return diaspora_guide.to_dict()
