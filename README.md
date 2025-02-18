# Micro-Frontend Project Documentation

This project demonstrates a **micro-frontend architecture** using Webpack Module Federation. It consists of four separate React applications:

- **micro-frontend-auth:** Handles user authentication (login, signup, etc.) and demonstrates integration with Formik for forms and RTK Query for API calls.
- **micro-frontend-dashboard:** Provides dashboard features and data visualizations.
- **micro-frontend-profile:** Manages user profiles and settings.
- **shell-app:** The container (host) application that dynamically loads and routes to the remote micro-frontends.

Each app also integrates:

- **Tailwind CSS:** For rapid, utility-first styling.
- **Formik:** For form handling and validation.
- **RTK Query:** For efficient data fetching and caching.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Applications](#running-the-applications)
- [Technology Stack](#technology-stack)
- [Customization Examples](#customization-examples)
- [Further Resources](#further-resources)
- [License](#license)

---

## Architecture Overview

The micro-frontend architecture splits features into independent, deployable units. The **shell-app** acts as a container, loading remote modules dynamically through Webpack Module Federation. This approach allows each domain (auth, dashboard, profile) to be developed, updated, and deployed independently.

---

## Project Structure

```
micro-frontend-project/
├── micro-frontend-auth/
│   ├── src/
│   │   ├── App.js         # Main authentication component (includes Formik & RTK Query)
│   │   ├── index.js       # Entry point
│   │   └── index.css      # Tailwind CSS styles
│   ├── webpack.config.js  # Module Federation config for auth
│   └── package.json
├── micro-frontend-dashboard/
│   ├── src/
│   │   ├── App.js         # Main dashboard component
│   │   ├── index.js       # Entry point
│   │   └── index.css      # Tailwind CSS styles
│   ├── webpack.config.js  # Module Federation config for dashboard
│   └── package.json
├── micro-frontend-profile/
│   ├── src/
│   │   ├── App.js         # Main profile component
│   │   ├── index.js       # Entry point
│   │   └── index.css      # Tailwind CSS styles
│   ├── webpack.config.js  # Module Federation config for profile
│   └── package.json
└── shell-app/
    ├── src/
    │   ├── App.js         # Container app with routing to remotes
    │   ├── index.js       # Entry point
    │   └── index.css      # Tailwind CSS styles
    ├── webpack.config.js  # Module Federation config for shell
    └── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later)
- npm (or yarn) package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/micro-frontend-project.git
   cd micro-frontend-project
   ```

2. **Install dependencies for each application:**

   Run the following commands in each project folder:

   ```bash
   cd shell-app
   npm install

   cd ../micro-frontend-auth
   npm install

   cd ../micro-frontend-dashboard
   npm install

   cd ../micro-frontend-profile
   npm install
   ```

### Running the Applications

Each remote runs on its own port, while the **shell-app** serves as the container.

- **micro-frontend-auth:** Port `3001`
- **micro-frontend-dashboard:** Port `3002`
- **micro-frontend-profile:** Port `3003`
- **shell-app:** Port `3000`

Start each app in a separate terminal:

```bash
# In shell-app directory
npm start

# In micro-frontend-auth directory
npm start

# In micro-frontend-dashboard directory
npm start

# In micro-frontend-profile directory
npm start
```

> **Note:** Start the remote applications first (ports 3001, 3002, 3003) and then launch the shell-app (port 3000). Navigate to [http://localhost:3000](http://localhost:3000) to see the container app with navigation to the remotes.

---

## Technology Stack

- **React:** JavaScript library for building user interfaces.
- **Webpack Module Federation:** Enables independent builds and deployments of micro-frontends.
- **Tailwind CSS:** Utility-first CSS framework for rapid styling.
- **Formik:** Simplifies form creation, management, and validation.
- **RTK Query:** Efficient data fetching and caching (part of Redux Toolkit).

---

## Further Resources

- [Webpack Module Federation Documentation](https://webpack.js.org/concepts/module-federation/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Formik Documentation](https://formik.org/)
- [RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding!

