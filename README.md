# 👨‍💻 Jed Lordy S. Legaspo - Personal Portfolio

> **A high-performance personal portfolio website showcasing my journey as a hackathon competitor, and full-stack developer.**

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 📖 Overview

This repository houses the source code for my personal portfolio. It is designed to be fast, type-safe, and responsive.

It serves as a central hub for my professional history, hackathon achievements, and technical projects. While the repository contains a traditional backend structure, the live site is optimized using a **Serverless** architecture.

## 📂 Project Structure & Architecture

This repository is structured as a monorepo containing both client and server code:

* **`frontend/`**: The main application built with **Vite**, **React**, and **TypeScript**. This is the active directory deployed to Vercel.
* **`backend/`**: Contains a standalone server implementation. *Note: This directory is currently **unused** in production.*
* **Serverless Functions**: Instead of deploying the standalone backend, I utilize Vercel's serverless capabilities (via the `api/` directory within the frontend or root configuration) to handle dynamic requests. This ensures lower latency and easier scaling.

## 🚀 Tech Stack

* **Build Tool:** [Vite](https://vitejs.dev/) (for lightning-fast HMR and bundling)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (for robust type safety)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
* **Deployment:** [Vercel](https://vercel.com/)

## 📂 Architecture: Serverless API

Unlike a traditional static site, this portfolio leverages the **Vercel** deployment model. 
* **Frontend:** The UI is built with Vite and React, served from the root.
* **Backend:** (Ignore the backend directoryLocated in the `/api` folder. These files are automatically deployed as serverless functions, handling dynamic tasks (like contact form submissions or fetching live data) directly within the same repository.

## 🌟 Portfolio Sections

### 💼 Professional Experience
A timeline of my industry contributions and career growth:
* **Software Engineering:** Professional contributions to scalable software systems.
* **Internship:** Practical application of academic concepts in a real-world enterprise environment.
* **Freelance Full Stack Developer:** extensive experience delivering custom web solutions for clients, managing the full lifecycle from design to deployment.

### 🏆 Competitions & Hackathons
A showcase of my participation and wins in the tech scene, including:
* **Ceb-i Hacks 2025 (MCIA):** Top 25 Finalist (Suroy App)
* **Philippine Startup Challenge (PSC) X:** Top 25 Finalist (Panday)
* **IBPAP Hackathon:** Participant (PALengke)
* **Notion Hackathon:** Team Leader (EduRoad)

### 💻 Projects
Detailed case studies of my development work, ranging from academic capstones to rapid hackathon prototypes using React Native, Flutter, and Next.js.

### 🎓 Education
* **University of the Philippines Cebu:** Computer Science / Software Engineering coursework and academic milestones.

## 🛠️ Local Development

To run this portfolio locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
    cd portfolio
    ```

2.  **Navigate to the frontend**
    ```bash
    cd frontend
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Test Serverless Functions (Optional)**
    To simulate the Vercel serverless environment locally:
    ```bash
    npx vercel dev
    ```

## 📬 Contact

Feel free to reach out for collaborations or opportunities!

* **Email:** [jed.lordy123@gmail.com](mailto:jed.lordy123@gmail.com)
* **LinkedIn:** [linkedin.com/in/jed-lordy-legaspo-9a55041a0](https://linkedin.com/in/jed-lordy-legaspo-9a55041a0)
* **GitHub:** [github.com/llegaspo](https://github.com/llegaspo)

---
*© [2026] [Jed Lordy S. Legaspo]. Built with Vite & TypeScript.*
