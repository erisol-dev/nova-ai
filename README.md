# Nova AI

Nova AI is a private web application for novel translation, writing, and project management. Built with **Next.js**, **Supabase**, and a **Python backend**, the app provides tools for managing content, organizing data, integrating machine translation, and leveraging AI services. Users can also upload their translated or written novels, creating a personal library for easy access and management.

---

## Features

- **Next.js Framework**: Fast and scalable React framework for modern web development.
- **Supabase Integration**: Used for database management, authentication, and storage.
- **Python Backend**: Handles AI and machine translation tasks such as tone refinement, glossary adaptation, and text processing.
- **Translation Tools**: Designed for integrating APIs like Google Translate and DeepL for machine translation.
- **Writing Tools**: A sleek, distraction-free text editor with AI-assisted brainstorming, grammar checking, and tone refinement.
- **Library Management**: Users can upload and manage their translated or written novels in a personalized library.
- **Project Management**: Organize translations and writings into projects, glossaries, and chapters.
- **Responsive Design**: Sleek and responsive UI powered by Tailwind CSS.

---

## Tech Stack

### **Frontend**
- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **State Management**: Context API or Redux (optional)
- **Authentication**: Supabase Auth
- **UI Components**: clsx and shadcn/ui for minimalistic design

### **Backend**
- **Primary Backend**: Python (FastAPI)
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: Python for processing machine translations and advanced AI features.
- **Authentication**: Supabase Auth

---

## Installation Guide

### **Prerequisites**

Before starting, ensure you have the following installed:

1. **Node.js** (v16 or later): [Install Node.js](https://nodejs.org/)
2. **pnpm**: [Install pnpm](https://pnpm.io/installation)
3. **Anaconda**: [Install Anaconda](https://www.anaconda.com/)
4. **Python** (3.9 or later): Installed through Anaconda or your system.
5. **Git**: [Install Git](https://git-scm.com/)

---

### **Steps to Set Up the Project**

#### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/nova-ai.git
cd nova-ai
```

---

### **Frontend Setup**

#### **2. Install Frontend Dependencies**
Navigate to the frontend directory and install dependencies:
```bash
cd nova-ai-frontend
pnpm install
```

#### **3. Start the Frontend Development Server**
Run the following command to start the development server:
```bash
pnpm dev
```

The frontend will run on `http://localhost:3000`.

---

### **Backend Setup**

#### **4. Set Up a Conda Environment**
Create and activate a Conda environment for the backend:
```bash
conda create -n nova-ai python=3.9 -y
conda activate nova-ai
```

#### **5. Install Backend Dependencies**
Navigate to the backend directory and install Python dependencies:
```bash
cd ../nova-ai-backend
pip install -r requirements.txt
```

#### **6. Start the Backend Development Server**
Run the following command to start the FastAPI server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will run on `http://localhost:8000`.

---

### **Running Both Frontend and Backend Simultaneously**

In the root directory (`nova-ai`), you can run both the frontend and backend simultaneously using `concurrently`:
```bash
pnpm dev
```

This will:
- Start the frontend on `http://localhost:3000`
- Start the backend on `http://localhost:8000`

---

## Environment Variables

### **Frontend**
Create a `.env.local` file in the `nova-ai-frontend` directory with the following variables:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### **Backend**
Create a `.env` file in the `nova-ai-backend` directory with the following variables:
```bash
SUPABASE_URL=your-supabase-url
SUPABASE_SECRET_KEY=your-secret-key
```

---

## Project Structure

```
nova-ai/
├── nova-ai-frontend/    # Frontend (Next.js)
│   ├── src/             # Source files
│   ├── public/          # Public assets
│   ├── package.json     # Frontend dependencies
│   └── tailwind.config.js
├── nova-ai-backend/     # Backend (FastAPI)
│   ├── main.py          # FastAPI entry point
│   ├── requirements.txt # Backend dependencies
│   └── app/             # Backend source files
├── .gitignore           # Git ignore rules
├── pnpm-workspace.yaml  # pnpm monorepo setup
└── README.md            # Project documentation
```
---
## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---



