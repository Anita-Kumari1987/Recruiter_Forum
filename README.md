## 🌐 Summary of application

Flexjobs is a fullstack recruitment platform designed for both recruiters as well as the job seekers, similar to LinkedIn. The idea behind this website is to craete a platform where 'job-seekers' can go and find the available job opportunities and 'recruiters' can log-in, publish and manage the jobs. The page shown in the project is recruiter-Dashbord, which appears after recruiter's log-in, named as 'Recruiter Forum'. It has two mejore seection. left section shows a form to submit/publish the job and second section shows the list of all jobs published by logged-in recruiter. The recruiter can update or delete the job-listing. This project had been made with a modern tech stack using Node.js, MongoDB, Mongoose, React, Vite, and Tailwind CSS.

---

## 🚀 Features
- 📝 Post new job listings
- 📋 View jobs posted by the logged-in recruiter
- ✏️ Edit or delete job listings
- ✅ Toast notifications for user updates
- 🧠 SweetAlert modals for confirmations
- Deal with accidental delete

---

## 🛠️ Tech Stack

### 🔹 Frontend

- React
- Vite
- Tailwind CSS
- Toast (react-toastify or similar)
- SweetAlert2 (`Swal.fire`)
- Common CSS (for global tweaks)

### 🔹 Backend

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv (for environment variable management)
---

## 🔧 How  to run

### 1. Clone the repo

https://github.com/Anita-Kumari1987/Recruiter-Forum-App.git

### 2.Setup Backend

cd Backend
npm install
Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Run the server:
npm start

### 3.Setup Frontend

cd Frontend
npm install
npm run dev

## How you ensured the application was accessible and SEO-friendly (with a focus on accessibility)?
### A11y 
- Color Contrast Compliance: Ensured that text is easy to read against its background, especially for people with visual impairments or color blindness.Used tools like WebAIM Contrast Checker*********
- Keyboard Accessibility: Ensured users can navigate the entire app using only the keyboard (Tab, Shift+Tab, Enter, Space).
Focus indicators were visible and consistent.
Many users—including those with motor disabilities, vision impairments, or temporary limitations—rely on keyboard navigation to interact with digital content.
- Screen Reader Support: Used Used aria-label, aria-expanded, and role="dialog" only when necessary.
- <img width="465" alt="Screenshot 2025-04-17 at 16 52 40" src="https://github.com/user-attachments/assets/ed2820ab-332b-45d3-8cac-5a3a20585532" />
### SEO
Used elements like <nav>, <main>, <button>, and <header> instead of <div>s, helps SEO crawlers to understand the structure of the content.
Added unique and relevant <title> and <meta name="description" />
Used clean, descriptive URLs.



---
## Tracking

---
## Security

---
## 📌 Future Improvements
Candidate portal & resume uploads
Recruiter's log-in page
Job filtering & search
Admin dashboard
Authentication 
Email notifications

## 🧑‍💻 Author
Anita Kumari
@Anita-Kumari1987
