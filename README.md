# Pixeldock App

A simple user management app built with **Next.js**, **TypeScript**, **Redux Toolkit**, **RTK Query**, **Tailwind CSS**, and **PostgreSQL**. The project is fully containerized with **Docker**.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [API Endpoints](#api-endpoints)

---

## Features

- List all users from a PostgreSQL database.
- Create new users via a form.
- Analytics showing total registered users.
- Fully responsive UI with Tailwind CSS.
- State management using Redux Toolkit and RTK Query.
- Containerized with Docker for easy setup.

---

## Project Structure
src/

    .
    ├── app/ # Next.js App Router pages
    ├── components/ # React components
    ├── pages/api/ # API routes
    ├── services/ # RTK Query API services
    ├── store/ # Redux store
    ├── types/ # TypeScript types
    └── styles/ # Tailwind/global CSS
    
---

## Requirements

- Node.js >= 18
- Docker & Docker Compose
- PostgreSQL (via Docker)

---

## Getting Started

1. Clone the repository
    git clone <your-repo-url>
    cd pixeldock-app

2. Create .env file
    DATABASE_URL=postgres://username:password@localhost:5432/pixeldock

3. Run with Docker
    docker compose up --build
    This will start:
        Next.js on http://localhost:3000
        PostgreSQL on port 5432

4. Access the app
    Open your browser at http://localhost:3000 to see the user management panel.

### Running Tests
  The project uses Jest and React Testing Library for unit tests.
    npm install
    npm run test

## API Endpoints
    GET /api/health – Check if the server is running.
    GET /api/users – Fetch all users.
    POST /api/users – Create a new user.
    GET /api/analytics – Fetch total user count.
