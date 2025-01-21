# course-selling-app
A full-stack web application that allows users to explore, purchase, and access courses, while providing admins with tools to manage the course catalog and content.

Features:-

User Features:-

Signup/Login: Create an account or log in to access the platform.
Browse Courses: View all available courses with details like title, description, and price.
Purchase Courses: Buy courses and access purchased content.
View Purchased Courses: See a personalized list of courses purchased.

Admin Features:-

Admin Login/Signup: Secure access for admins to manage the platform.
Create Courses: Add new courses to the catalog.
Delete Courses: Remove courses from the catalog.
Update Course Content: Modify course details and upload content.

Additional Features:-

Authentication using cookies or JWT.
Middleware for user and admin authorization.
Rate limiting to prevent abuse.
MongoDB as the database to store user, admin, and course details.

Tech Stack:-

Backend:-

Node.js with Express.js: For the server and routing.
MongoDB with Mongoose: For database management.
dotenv: To manage environment variables securely.
cookie-parser: For handling cookies.
express-rate-limit: To implement rate limiting.

Frontend:-

Option 1: React.js for dynamic, interactive client-side pages.

