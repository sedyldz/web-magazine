# Web Magazine with Dynamic Issue and Article Template

## Overview

This repository is for a web magazine project utilizing a mono-repo setup that includes both the backend and frontend codebases. The backend is powered by Strapi, a headless CMS, allowing for easy content management and API generation. The frontend is developed with Gatsby, a React-based static site generator, and styled with Tailwind CSS for responsive and customizable design.

### Key Technologies

- **Strapi:** Open-source headless CMS for managing and delivering your content.
- **Gatsby:** React-based framework for creating fast and secure websites.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **GraphQL:** A query language for your API.

<img width="1680" alt="Screenshot 2024-02-05 at 17 18 30" src="https://github.com/sedyldz/web-magazine/assets/41821819/aafce86b-0f56-46af-bb8e-22e904d3e724">

## Project Structure

The project is divided into two main directories:

- `/backend`: Contains the Strapi application with the content models, plugins, and configurations.
- `/frontend`: Houses the Gatsby application, including pages, components, and styles.

### Example Component

Included in the frontend is an example component `IssuePage`, which demonstrates how to fetch and display an issue and its articles from Strapi using GraphQL and render it with Gatsby and Tailwind CSS for styling.

## Getting Started

### Prerequisites

- Node.js (LTS version)
- Yarn or npm
- Gatsby CLI (optional)
- Strapi CLI (optional)

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>

2. Install Backend Dependencies
   Navigate to the backend directory and install dependencies.
   ```bash
   cd backend
   yarn install # or npm install

3. Install Frontend Dependencies
   Navigate to the frontend directory and install dependencies.
   ```bash
   cd frontend
   yarn install # or npm install

### Running the Project

#### Start the Backend
In the backend directory, start the Strapi server.
```bash
yarn develop # or npm run develop
```

#### Start the Frontend
In a new terminal window, navigate to the frontend directory and start the Gatsby server.
```bash
gatsby develop
```

#### Accessing Strapi CMS
After starting the backend, access the Strapi admin panel at http://localhost:1337/admin.


### Deployment
You can deploy in any NodeJs Server by building both frontend and backend folders. 

<img width="1677" alt="Screenshot 2024-02-05 at 17 19 30" src="https://github.com/sedyldz/web-magazine/assets/41821819/e524590d-d4f2-4aba-8de6-738e32c3df02">



