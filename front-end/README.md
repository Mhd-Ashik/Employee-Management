# Employee Management System

## 📌 Project Overview
The **Employee Management System** is a web-based application designed to streamline employee data management. It allows users to add, update, delete, and search for employees using **name** and **email**. The system is built using a **ReactJS** frontend, a **Spring Boot** backend, and **MySQL** for database storage.

## 🚀 Features
- ✅ **Employee Record Management** – Add, update, and delete employee details.
- 🔍 **Search Employee** – Find employees by **name** and **email**.
- 🎨 **Responsive UI** – Built with **ReactJS** and **Bootstrap** for a modern, mobile-friendly experience.
- 🗄️ **Database Integration** – Uses **Spring Data JPA** with **MySQL**.
- 🔐 **Secure Access** – Role-based authentication (future enhancement).
- ⚡ **Fast & Scalable** – RESTful APIs ensure smooth performance.

## 🛠️ Tech Stack
**Frontend:**  
- ReactJS (vite)
- HTML, CSS, JavaScript  
- Bootstrap  

**Backend:**   
- Java (v17)
- Spring Boot
- Spring Data JPA  
- REST API  

**Database:**  
- MySQL  

## 📂 Folder Structure
employee-management-system/
│── frontend/               # ReactJS Frontend
│   ├── src/                # Source files for the frontend
│   │   ├── components/     # Reusable UI components (e.g., buttons, forms)
│   │   ├── pages/          # Main application pages (e.g., Employee List, Dashboard)
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # Entry point for the React application
│   ├── package.json        # Lists dependencies and project configuration for React
│
│── backend/                # Spring Boot Backend
│   ├── src/main/java/      # Java source code
│   │   ├── controller/     # API controllers (Handles HTTP requests)
│   │   ├── service/        # Business logic (Processes data)
│   │   ├── repository/     # JPA repositories (Handles database operations)
│   │   ├── model/          # Entity classes (Defines database tables)
│   ├── application.properties  # Database configuration (MySQL, server port, etc.)
│
│── README.md               # Project documentation with setup instructions
│── .gitignore              # Files to be ignored by Git (node_modules, target, etc.)
│── package.json            # React dependencies (duplicate mention; belongs in frontend)
│── pom.xml                 # Spring Boot dependencies (Maven configuration)


## ⚙️ Setup Instructions

### 🔹 **Backend Setup (Spring Boot)**
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/employee-management-system.git

Open the backend folder in IntelliJ IDEA or Eclipse.
Configure MySQL database in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

Run the Spring Boot application:

mvn spring-boot:run

🔹 Frontend Setup (ReactJS)

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the React development server:

npm start

Open http://localhost:3000/ in your browser.

🛠️ API Endpoints
Method	           Endpoint	                                   Description
GET	              /api/employees	                         Get all employees
GET	             /api/employees/{id}	                     Get employee by ID
GET	   /api/employees/search?name={name}&email={email}	     Search employee by name & email
POST	          /api/employees	                         Add a new employee
PUT	           /api/employees/{id}	                         Update employee details
DELETE	       /api/employees/{id}	                         Delete an employee

📌 Future Enhancements
🔐 User Authentication & Role-based Access Control
📊 Employee Performance Tracking
📅 Leave & Attendance Management