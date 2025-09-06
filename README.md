# 🏥 CareLink

**CareLink** is a real-time caregiver-user matching & chat platform.  
Users can browse caregivers, express interest, and when both parties "like" each other, a secure private chat room is unlocked.  
The app solves the real-world problem of finding and communicating with reliable caregivers while ensuring **privacy and real-time communication**.

---

## 🚀 Features

- 🔐 **Authentication & Roles**
  - JWT-based login/signup
  - Role-based access (User / Caregiver)

- 👥 **Profiles**
  - User: basic details & needs
  - Caregiver: experience, skills, availability, hourly rate

- ❤️ **Matching System**
  - Like → Pending
  - Mutual like → Matched → Chat room created

- 💬 **Private Chat**
  - Real-time messaging (Socket.IO)
  - Private chat room (User ↔ Caregiver only)
  - Chat history persisted in PostgreSQL

- ⚡ **Extras**
  - Redux for state management
  - Tailwind for clean, responsive UI
  - Deployed on modern cloud platforms (Vercel + Render)

---

## 🛠 Tech Stack

**Frontend**
- React
- TailwindCSS
- Redux Toolkit
- Socket.IO Client

**Backend**
- Node.js + Express
- Socket.IO Server
- Prisma ORM
- PostgreSQL (via Supabase/Neon/Render)

**Deployment**
- Vercel (Frontend)
- Render/Heroku (Backend)
- Supabase/Neon (Postgres)

---

## 📂 Folder Structure

