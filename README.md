# Masterdeal Properties App

Masterdeal Properties is a cutting-edge real estate application designed to streamline property management and enhance the home-buying experience. Whether you're looking to buy, sell, or rent properties, Masterdeal Properties offers all the tools you need to make informed decisions, manage properties, and create your ideal living space.

## Description

Masterdeal Properties provides a comprehensive suite of features to help you find the perfect property, track listings, and manage transactions effortlessly.

Key Features:

    View detailed property listings with high-quality images and descriptions.
    Filter properties based on location, price, size, and type to find the best matches.
    Browse featured properties and property recommendations tailored to your preferences.
    Get insights into property availability, pricing trends, and more.
    Manage your own listings, contact agents, and track your real estate journey.

### Requirements

A computer with a bash terminal
Access to the Internet
Node.js and npm installed (for front-end)
Python 3.x and pipenv installed (for back-end)

### Installation Process of the front end

    Navigate to your terminal.

    Create your real estate app using the following command:

  npx create-react-app masterdeal-properties

    Navigate to the project directory:

cd masterdeal-properties

    Install the necessary dependencies:

npm install

    Start the development server:

npm start

The front-end should now be live at http://localhost:3000 by default.
```

### Installation Process of the back end

1    Set up the virtual environment for your project:

pipenv install
pipenv shell

    Install Flask and other necessary packages:

pipenv install flask
pipenv install flask-sqlalchemy
pipenv install flask-migrate
pipenv install flask-cors

    Configure your Flask application (config.py):

SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///masterdeal.db')
SQLALCHEMY_TRACK_MODIFICATIONS = False

    Initialize the Flask app (app.py).

    Define your models (models.py).

    Run the database migrations:

flask db init
flask db migrate -m "Initial migration."
flask db upgrade

    Seed the database with initial data:

python seed.py

    Define routes in routes.py for various API endpoints.

    Run the Flask app:

python app.py

### Installation Process

1    Clone this repository using:

git clone git@github.com:luvley-dee48/masterdeal-properties.git

    Navigate to the project folder in your terminal.

    Install the necessary dependencies:

pipenv install
pipenv shell

    Install front-end dependencies:

npm install

    Seed the database with data:

python seed.py

    Run the application:

python app.py
npm start

Your full-stack application should now be running, with the front-end accessible at http://localhost:3000 and the back-end available on http://localhost:5000.

## Technologies Used

    Front-End: React.js
    Back-End: Python, Flask
    Database: SQLite with Flask-SQLAlchemy
    Styling: Styled Components, Custom CSS
    Deployment: Can be deployed using services like Heroku or AWS for back-end and Netlify for front-end.

## Support and Contact Details

Incase of any query, need for collaboration or issues with this code, feel free to reach me at
<jay.mbugua.ph@gmail.com>

### Team collaboration


## License
MIT License

Copyright (c) 2024 jammie-commits

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.