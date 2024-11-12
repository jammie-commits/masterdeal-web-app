from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import MetaData
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash


# Initialize the db object

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)  # Increased length for hashed password
    is_admin = db.Column(db.Boolean, default=False)  # Default to False if not provided

    def __repr__(self):
        return f'<User {self.username}>'

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "is_admin": self.is_admin
        }

class Property(db.Model):
    __tablename__ = 'properties'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)  # Changed to Float for numeric operations
    description = db.Column(db.String(500), nullable=False)
    features = db.Column(db.String(500))

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "description": self.description,
            "features": self.features,
        }

class Service(db.Model):
    __tablename__ = 'services'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    sub_title = db.Column(db.String(250), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "sub_title": self.sub_title
        }

class Testimonial(db.Model):
    __tablename__ = 'testimonials'
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100), nullable=False)
    destination_title = db.Column(db.String(100), nullable=True)
    rating = db.Column(db.Float, nullable=False)
    comments = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "destination_title": self.destination_title,
            "rating": self.rating,
            "comments": self.comments
        }

class ContactMessage(db.Model):
    __tablename__ = 'contact_messages'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "message": self.message
        }

class Diaspora(db.Model):
    __tablename__ = 'diaspora_guide'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)  # Stores the process content (the list of steps)
    contact_email = db.Column(db.String(100), nullable=False)
    contact_phone = db.Column(db.String(50), nullable=False)
    contact_whatsapp = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'contact': {
                'email': self.contact_email,
                'phone': self.contact_phone,
                'whatsapp': self.contact_whatsapp
            }
        }

    def __repr__(self):
        return f'<Diaspora {self.title}>'
    
