from app import create_app, db
from models import User, Property, Diaspora, ContactMessage
from flask_bcrypt import Bcrypt

# Initialize bcrypt
bcrypt = Bcrypt()

def seed_database():
    # Ensure the app context is available
    with app.app_context():
        # Create some users
        print("Seeding Users...")
        if not User.query.filter_by(email="dennis@gmail.com").first():
            hashed_password = bcrypt.generate_password_hash('dennis123').decode('utf-8')
            admin_user = User(username="dennis", email="dennis@gmail.com", password=hashed_password, is_admin=True)
            db.session.add(admin_user)
        
        if not User.query.filter_by(email="user@gmail.com").first():
            hashed_password = bcrypt.generate_password_hash('user123').decode('utf-8')
            regular_user = User(username="user", email="user@gmail.com", password=hashed_password, is_admin=False)
            db.session.add(regular_user)

        # Commit the users to the database
        db.session.commit()

        # Create some properties
        print("Seeding Properties...")
        if Property.query.count() == 0:
            property1 = Property(
                title="Beachfront Property in Mombasa",
                price=15000000,
                description="A beautiful beachfront property located on the coast of Mombasa.",
                features="Sea View, Beach Access, 24/7 Security, Spacious",
                image_url="https://example.com/property1.jpg"
            )
            property2 = Property(
                title="Residential Plot in Nairobi",
                price=8000000,
                description="Ideal plot for residential development, located in a growing neighborhood.",
                features="Close to Public Transport, Secure Area, Flat Terrain",
                image_url="https://example.com/property2.jpg"
            )

            db.session.add(property1)
            db.session.add(property2)

            # Commit the properties to the database
            db.session.commit()

        # Seed the Diaspora page (if not already seeded)
        print("Seeding Diaspora Guide...")
        if not Diaspora.query.first():
            diaspora_guide = Diaspora(
                title="Buying Land in Kenya - Diaspora Guide",
                content="""If you’re interested in buying land in Kenya from abroad, here’s a simple guide to get you started:
                - Identify and confirm the land of interest with a trusted agent.
                - Request and review the title deed to confirm ownership.
                - Conduct a search with the Ministry of Lands to verify authenticity.
                - Negotiate the terms and price, and draft the sale agreement.
                - Pay a deposit to secure the land (usually 10%).
                - Complete the land survey and other due diligence steps.
                - Finalize the transaction with full payment and receive the transfer documents.
                - Register the land under your name at the Ministry of Lands.
                """,
                contact_email="info@masterdealproperties.com",
                contact_phone="+254 700 123 456",
                contact_whatsapp="+254 700 123 456"
            )
            db.session.add(diaspora_guide)

            # Commit the diaspora guide to the database
            db.session.commit()

        # Create some contact messages (optional)
        print("Seeding Contact Messages...")
        if ContactMessage.query.count() == 0:
            message1 = ContactMessage(name="John Doe", email="john.doe@example.com", message="I'm interested in the Mombasa property.")
            message2 = ContactMessage(name="Jane Smith", email="jane.smith@example.com", message="I'd like more details about the Nairobi residential plot.")

            db.session.add(message1)
            db.session.add(message2)

            # Commit the messages to the database
            db.session.commit()

        print("Seeding completed!")

if __name__ == '__main__':
    app = create_app()  # Initialize the Flask app
    with app.app_context():  # Ensure the app context is pushed before using db
        seed_database()
