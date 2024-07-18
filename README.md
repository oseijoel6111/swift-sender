# swift-sender
Email management system aim to simplify the automation of sending emails to either single or bulk users
Swift Sender is a comprehensive email management platform designed to streamline the ccreation, customization,and sending of email. 
It supports various email types such as verification emails, password reset emails, and congratulatory emails. 
TYhe platform is built using Express.js with EJS template engine and integrates with third party 
email services like SendGrid and Mailgun.

Table of Contents
Project desription
Features
Technologies Used
Architecture
Installation
Usage
API Endpoints
Challenge and Solutions
Future Improvements
Contributors
License

Project Description
Swift Sender aims to simplify and enhance email communication by providing a
platform for creating, customiing, and sending various types of emails efficiently. The platform
is designed to be user-friendly, secure, and scalable.

Features
user registration and authentication
create, edit,and delete email templates
send emails using predefined templates
view history of sent emails
responsive email templates
integration with third-party email services (SendGrid, Maligun)

Tecnologies used
Backend:
Express.js:Server-side framework
Node.js: Runtime environment
MySQL: relational database

Frontend:
EJS: Template engine for rendering dynamic HTML

Third-party services

SendGrid:Email delivery service
Mailgun: Email delivery service

Architecture

The architecture consists of:

Backend: Express.js handles the server-side logic, routing, and API endpoints.
Frontend: EJS templates are used for rendering dynamic HTML views.
Database: MYSQL stores user information and email templates.
Third-Party Services: SendGrid and Mailgun are used for sending emails.

https://github.com/oseijoel6111/swift-sender

Install dependencies:
yarn install

[4:33 pm, 17/07/2024] Joel ALX: Set up environment variables:
Create a .env file in the root directory and add the following:

PORT=4500

# STMP SERVER
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_PASSWORD=n1zyHmsAN0paxERr
SMTP_USER=tester.com

# SESSION
SECRET = fhfffhhhhdjdj
NAME= myCustomSessionId
[4:33 pm, 17/07/2024] Joel ALX: Start the server:
yarn start
[4:34 pm, 17/07/2024] Joel ALX: Usage
Register a new user: Navigate to /admin/signup and create a new account.
Log in: Navigate to /admin/login and log in with your credentials.
Create an email template: Navigate to /emails/templates and create a new template.
Send an email: Use the created template to send an email via the /emails/send endpoint.
View sent emails: Navigate to /emails/history to view the history of sent emails.

[4:33 pm, 17/07/2024] Joel ALX: Start the server:
yarn start
[4:34 pm, 17/07/2024] Joel ALX: Usage
Register a new user: Navigate to /admin/signup and create a new account.
Log in: Navigate to /admin/login and log in with your credentials.
Create an email template: Navigate to /emails/templates and create a new template.
Send an email: Use the created template to send an email via the /emails/send endpoint.
View sent emails: Navigate to /emails/history to view the history of sent emails.
[4:34 pm, 17/07/2024] Joel ALX: Challenges and Solutions
Responsive Email Design: Ensured email templates are responsive using media queries.
Secure Email Verification: Implemented JWT for secure email verification without storing tokens.
Efficient Email Handling: Integrated with SendGrid and Mailgun to handle email delivery efficiently.
[4:34 pm, 17/07/2024] Joel ALX: Future Improvements
Implement advanced analytics for email tracking.
Expand user role functionalities and permissions.
Integrate AI for personalized email content.
Develop a mobile app for email management on-the-go.
[4:35 pm, 17/07/2024] Joel ALX: Contributors

Joel: Backend Developer
Serwaa : Backend Developer
