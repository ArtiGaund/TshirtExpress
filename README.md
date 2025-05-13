# TshirtExpress

TshirtExpress is a full-stack e-commerce application designed for selling T-shirts. It features a Django-based backend and a React-based frontend, providing a seamless user experience for browsing, purchasing, and managing products.

---

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
4. [Features](#features)
5. [Technologies Used](#technologies-used)
6. [Development Workflow](#development-workflow)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

---

## Overview

TshirtExpress is a scalable e-commerce platform that allows users to:

- Sign up and log in securely.
- Browse and filter products.
- Add products to their cart and make payments.
- Manage orders and view purchase history.

---

## Project Structure



---

## Setup Instructions

### Backend Setup

1. **Install Dependencies**  
   Ensure Python and `pipenv` are installed. Then, run:
   ```sh
   pip install pipenv
   pipenv install```

2. **Run Migrations
Apply database migrations:
    ```python manage.py migrate```

3. Start the Backend Server
Run the development server:
    ```python manage.py runserver```

4. Access the Backend
Open http://127.0.0.1:8000 in your browser.

### Frontend Setup

1. Navigate to the Frontend Directory
```cd frontend```

2. Install Dependencies
Ensure Node.js and npm are installed. Then, run:
```npm install```

3. Start the Frontend Server
Run the development server: 
```npm start```

4. Access the Frontend
Open http://localhost:3000 in your browser.

--- 

Features
* User Authentication: Secure signup and login functionality.
* Product Management: Browse, filter, and view product details.
* Cart and Checkout: Add products to the cart and make payments.
* Order Management: View and manage orders.
* Responsive Design: Optimized for desktop and mobile devices.



Technologies Used   
* Django: Python web framework for backend development.
* React: JavaScript library for building user interfaces.
* PostgreSQL: Relational database management system.
* Node.js: JavaScript runtime for backend development.
* NPM: Package manager for Node.js.
* Axios: HTTP client for making API requests.
* Stripe: Payment processing platform.  

Development Workflow

1. Backend Setup
2. Frontend Setup
3. Database Setup
4. Run the Backend Server
Start the Django server:
```python manage.py runserver```
5. Run the Frontend Server
   Start the React development server:

   ```npm start```

6. Access the Application
Open http://localhost:3000 in your browser.

7. Code Structure

* Backend logic is in the ecom/ directory.
* Frontend components are in the projfrontend/src/ directory.


Deployment
    * Backend Deployment
    1.Configure production settings in ecom/ecom/settings.py.
    2. Use a production-ready server like Gunicorn or uWSGI.

    * Frontend Deployment
    1. Build the frontend for production:
    ```npm run build```
    2. Serve the build/ folder using a static file server or integrate it with the backend.

    