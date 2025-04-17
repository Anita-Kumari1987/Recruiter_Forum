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
- Keyboard Accessibility: Ensured users can navigate the entire app using only the keyboard (Tab, Shift+Tab, Enter, Space).Focus indicators were visible and consistent. Many users—including those with motor disabilities, vision impairments, or temporary limitations—rely on keyboard navigation to interact with digital content.
- Screen Reader Support: Used aria-label, aria-expanded, and role="dialog" only when necessary.Used semantic HTML tags which will help screen readers to understand the structure of the page.
### SEO
- Used elements like header, nav, Main, Section, helps SEO crawlers to understand the structure of the content.
- Used appropriate heading hierarchy like h1, h2 & h3.
- Added unique and relevant <title> and <meta name="description" />
- Used clean, descriptive URLs.
---

## what type of tracking you have implemented, why, and how it takes into consideration your users privacy.
### Tracking
I have used Google Analytics 4 (GA4) to track:
- Page views
- User engagement (like time on site and interactions)
- Traffic sources (where users are coming from)
This helps to understand how recruiters interact with the dashboard and which features are most useful.
### Privacy Considerations
- No personally identifiable information (PII) is collected.
- Google Analytics 4 anonymizes IP addresses by default.
- The script loads asynchronously, minimizing performance impact.
- We do not use tracking for remarketing or personalized advertising.
- Tracking is used solely for aggregate analytics to improve usability.
---
## 2 common threats and vulnerabilities that your project might be vulnerable too. Going into detail over one of them, explaining how you have mitigated yourself against it.
### threats and vulnerabilities
1. No Input Validation or Sanitization : Website is trusting anything that users type into form without checking if it’s safe or even makes sense.
2. Accidental deletion: It is a serious threat to the integrity and availability of the data — two core principles of web security (CIA model: Confidentiality, Integrity, Availability). If the delete button is exposed to anyone who is not authorised to use , then anyone can delete anything — even if it's accidental, it's still a privilege escalation issue.
### Mitigation
🛡️ Soft Delete to Prevent Accidental Deletion
To safeguard against accidental or unauthorized deletion, the application implements a soft delete mechanism rather than permanently removing job listings from the database.
Instead of deleting the data, the following logic is used in the backend:
In JobListing Schema:
<img width="310" alt="Screenshot 2025-04-17 at 18 46 51" src="https://github.com/user-attachments/assets/3c3bba4c-dd80-49dd-b15b-ec03c2f83b39" />
Then:
<img width="768" alt="Screenshot 2025-04-17 at 18 48 27" src="https://github.com/user-attachments/assets/4849e568-0864-4771-a8c3-1e0e038e055d" />
✅ How It Works:
- When the "Delete" button is clicked, the job listing’s status is updated to "deleted" instead of being removed from MongoDB.
- This ensures that the data is retained in the database, providing an opportunity to restore it later if needed.
- All job listing queries are filtered to exclude entries where status is "deleted", so deleted listings are hidden from the frontend.

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
