# Shriman Buildcon

A modern, responsive full-stack web application developed for **Shriman Buildcon**, a construction and infrastructure company. The platform provides a professional online presence along with project showcasing, customer interaction, enquiry management, and an administrative dashboard.

## Live Project

**GitHub:**
https://github.com/shreyashreya2223/shriman-buildcon

---

## Project Overview

Shriman Buildcon is a full-stack web application designed to help a construction business showcase its services, projects, clients, and work gallery while providing functionality for managing customer enquiries and business data.

The application combines a responsive public-facing website with an administrative interface for managing operational information.

### Key Objectives

* Build a professional and responsive company website
* Showcase construction projects and services
* Provide customers with an easy way to submit enquiries
* Manage customer enquiries through an admin dashboard
* Manage project and estimate-related information
* Implement authentication for protected administrative areas
* Store and retrieve application data using Supabase
* Provide a scalable and maintainable project structure

---

## Features

### Public Website

* Responsive landing page
* Company introduction and About section
* Services showcase
* Project portfolio
* Individual project pages
* Client showcase
* Image gallery
* Testimonials section
* Contact section
* Customer enquiry form
* Responsive navigation
* Modern animations and UI interactions

### Authentication and Admin Dashboard

* Secure login page
* Protected administrative routes
* Admin dashboard
* Customer management
* Customer detail pages
* Query and enquiry management
* Estimate management
* Create and edit estimates
* Project management
* Server-side authentication and authorization

### Customer Enquiries

Customers can submit enquiries through the website.

The application provides an administrative interface where enquiries can be viewed and managed.

### Business Management

The admin section provides functionality for managing:

* Customers
* Queries
* Estimates
* Projects
* Project details

---

## Tech Stack

### Frontend

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

### Backend

* Next.js App Router
* Next.js API Routes
* Supabase
* Supabase SSR

### Additional Technologies

* Resend — email functionality
* OneSignal — web push notification support
* ESLint — code quality
* Git and GitHub — version control

---

## Application Architecture

The project follows a component-based architecture using the Next.js App Router.

```text
shriman-buildcon/
│
├── public/
│   ├── clients/
│   ├── gallery/
│   └── ...
│
├── src/
│   │
│   ├── app/
│   │   ├── about/
│   │   ├── admin/
│   │   │   ├── customers/
│   │   │   ├── estimates/
│   │   │   └── queries/
│   │   ├── api/
│   │   │   ├── estimate/
│   │   │   └── gallery/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── login/
│   │   ├── projects/
│   │   ├── services/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Clients.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── QueryForm.tsx
│   │   └── Services.tsx
│   │
│   ├── data/
│   │   ├── customers.ts
│   │   ├── estimates.ts
│   │   └── projects.ts
│   │
│   ├── lib/
│   │   └── supabase/
│   │       ├── client.ts
│   │       └── server.ts
│   │
│   └── middleware.ts
│
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## Main Application Modules

### 1. Public Website

The public-facing application contains pages for:

* Home
* About
* Services
* Projects
* Gallery
* Contact

The interface is designed to be responsive across desktop and mobile devices.

### 2. Project Management

Projects are displayed through dedicated project pages with detailed information and media.

Dynamic routing is implemented using the Next.js App Router.

```text
/projects/[slug]
```

This allows individual projects to be accessed through dynamic URLs.

### 3. Customer Management

The admin dashboard contains customer management functionality including:

* Customer listing
* Customer details
* Customer-related information

Dynamic customer pages are implemented using:

```text
/admin/customers/[id]
```

### 4. Query Management

Customer enquiries submitted through the website can be accessed from the admin dashboard.

The application provides:

* Query listing
* Query details
* Query management

### 5. Estimate Management

The application contains an estimate management module supporting:

* Estimate listing
* Creating estimates
* Viewing estimates
* Editing estimates
* Dynamic estimate pages

Routes include:

```text
/admin/estimates
/admin/estimates/new
/admin/estimates/[id]
/admin/estimates/[id]/edit
```

### 6. API Layer

The application uses Next.js API routes for server-side operations.

Examples include:

```text
/api/estimate
/api/gallery
```

This allows the frontend to communicate with backend functionality without requiring a separate backend server.

---

## Database and Backend

**Supabase** is used as the backend and data platform.

The project contains separate Supabase utilities for client-side and server-side operations:

```text
src/lib/supabase/client.ts
src/lib/supabase/server.ts
```

This separation helps manage database operations appropriately across client and server environments.

---

## Authentication

The application includes an authentication flow for administrative users.

Protected admin routes are handled using middleware and server-side authentication.

```text
/login
/admin
```

The middleware helps prevent unauthorized access to protected administrative functionality.

---

## Responsive Design

The application is designed with responsive layouts so that the website can be accessed across:

* Desktop
* Laptop
* Tablet
* Mobile devices

Reusable React components are used to maintain consistency across different pages.

---

## Performance and User Experience

The application uses modern Next.js features along with:

* Component-based architecture
* Dynamic routing
* Optimized image handling
* Server/client separation
* Responsive layouts
* UI animations
* Reusable components

Framer Motion is used to provide smooth animations and interactive UI elements.

---

## Notifications

The project includes **OneSignal** integration for web push notification support.

The application also includes email-related functionality using **Resend**.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 18+
* npm

### 1. Clone the repository

```bash
git clone https://github.com/shreyashreya2223/shriman-buildcon.git
```

### 2. Navigate to the project

```bash
cd shriman-buildcon
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory.

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Add any additional API keys required by the services configured in the application.

**Do not commit secret keys or credentials to GitHub.**

### 5. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server using Turbopack.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the production server.

### Lint

```bash
npm run lint
```

Runs the project's linting configuration.

---

## What I Learned

Through this project, I gained practical experience in:

* Building full-stack applications with Next.js
* Developing reusable React components
* Working with TypeScript
* Implementing dynamic routes
* Building API routes
* Integrating Supabase
* Handling authentication
* Creating protected admin routes
* Managing application data
* Building responsive user interfaces
* Working with external services and APIs
* Structuring a scalable Next.js project
* Using Git and GitHub for version control

---

## Future Improvements

Potential improvements include:

* Advanced role-based access control
* Enhanced analytics dashboard
* More detailed estimate generation
* Improved enquiry notification system
* Automated email notifications
* Advanced search and filtering
* Additional performance optimization
* Automated testing
* CI/CD pipeline
* Production monitoring and logging

---

## Developer

**Shreya**

B.Tech Computer Science and Engineering
AI and Machine Learning

GitHub:
https://github.com/shreyashreya2223

---

## License

This project was developed for the Shriman Buildcon website/application and is maintained for project and portfolio purposes.
