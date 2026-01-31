# Portfolio - React

A modern, animated portfolio website built with React and Vite.

**Live Link:** https://portfolio-zeta-amber-33.vercel.app/

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool
- **Framer Motion** - Animations
- **React Router DOM** - Routing
- **Lucide React** - Icons

## Project Structure

```
portfolio-react/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
│
├── public/
│   └── images/
│
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    │
    ├── assets/
    │   ├── assets/
    │   ├── icons/
    │   ├── Images/
    │   ├── project_pics/
    │   ├── public/
    │   └── stack/
    │   ├── arrow_icon.svg
    │   ├── call_icon.svg
    │   ├── crewai.png
    │   ├── engineered_projects_data.js
    │   ├── Langchain.svg
    │   ├── langgrapg.svg
    │   ├── Langgraph.svg
    │   ├── location_icon.svg
    │   ├── mail_icon.svg
    │   ├── mail-icon.svg
    │   ├── menu_close.svg
    │   ├── menu_open.svg
    │   ├── mywork_data.js
    │   ├── nav_underline.svg
    │   ├── NUST.png
    │   ├── psychiatristai_logo.jfif
    │   ├── services_data.js
    │   ├── shaheer-resume.pdf
    │   ├── theme_pattern.svg
    │   ├── user_icon.svg
    │   └── work_data.js
    │
    ├── Components/
    │   ├── About/
    │   ├── Contact/
    │   ├── CustomCursor/
    │   ├── EngineeredProjects/
    │   ├── Footer/
    │   ├── Hero/
    │   ├── Icons/
    │   ├── LoadingScreen/
    │   ├── MyWork/
    │   ├── NavigationBar/
    │   ├── ParticleBackground/
    │   ├── Projects/
    │   ├── ProjectsDetail/
    │   ├── ScrollProgress/
    │   ├── Skill&Experience/
    │   └── SkillIcons/
    │
    └── hooks/
        └── useCountUp.js
```

## Components Overview

| Component | Description |
|-----------|-------------|
| **Hero** | Landing section with animations |
| **About** | About me section |
| **Skill&Experience** | Skills and experience display |
| **MyWork** | Portfolio/work showcase |
| **EngineeredProjects** | Technical projects section |
| **ProjectsDetail** | Detailed project views |
| **Contact** | Contact information and form |
| **NavigationBar** | Responsive navigation |
| **Footer** | Footer with social links |
| **CustomCursor** | Custom cursor effect |
| **ParticleBackground** | Animated particle background |
| **LoadingScreen** | Loading animation |
| **ScrollProgress** | Scroll progress indicator |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ESLint Configuration

This project uses ESLint with React-focused rules. Run `npm run lint` to check for issues.
