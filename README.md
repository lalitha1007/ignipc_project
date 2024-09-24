# Blog Platform

## Overview
A simple blog platform built with Next.js, Fastify, and PostgreSQL.

## Technologies
- Frontend: Next.js with TypeScript
- Backend: Fastify (Node.js)
- Database: PostgreSQL
- UI Framework: Material-UI

## Setup Instructions

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Compile TypeScript: `tsc server.ts`.
4. Run the server: `node server.js`.

### Database
Ensure PostgreSQL is running and create the database and `articles` table using the provided SQL commands.

## API Endpoints
- `GET /api/articles`: Retrieve all articles.
- `POST /api/articles`: Create a new article.
