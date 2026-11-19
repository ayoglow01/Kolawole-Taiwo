# Kolawole Taiwo Olawale — Professional Website

A modern, responsive professional website for **Kolawole Taiwo Olawale**, a Business Operations & Performance Professional and Power BI Data Analyst based in Lagos, Nigeria.

Designed as a digital professional profile, the website presents professional experience, areas of expertise, credentials, leadership contributions, and selected projects through a structured and accessible user experience.

## Features

- **Professional Profile** – Personal introduction, professional background, and career highlights.
- **Expertise Showcase** – Presentation of business operations, performance management, and data analytics capabilities.
- **Professional Experience** – Structured employment history with featured roles and expandable earlier experience.
- **Featured Projects** – Dedicated presentation of selected projects and their technical details.
- **Credentials & Education** – Academic qualifications and professional certifications.
- **Leadership & Impact** – Highlights of leadership experience and voluntary contributions.
- **Responsive Navigation** – Sticky navigation, mobile menu, and active-section tracking.
- **Direct Contact Integration** – Email, telephone, social media, and WhatsApp links where configured.
- **CV Download** – Configurable downloadable professional CV.
- **Accessibility & Performance** – Semantic HTML, keyboard navigation, reduced-motion support, and optimized static delivery.

## Technology Stack

| Category | Technologies |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Testing | Vitest, Testing Library |
| Browser Testing | Playwright |
| Code Quality | ESLint, typescript-eslint |
| Deployment | Vercel / Static Hosting |

## Architecture

The project follows a component-based architecture with a centralized, strongly typed content structure.

- **Components** – Reusable layout elements, interface components, and professional profile sections.
- **Data & Configuration** – Centralized profile information, experience, expertise, projects, credentials, and site settings.
- **Hooks** – Reusable scroll and active-section functionality.
- **Utilities** – Shared link-generation and contact integration helpers.
- **Styling** – Centralized design tokens, typography, colors, and responsive styles.

This separation keeps professional information independent of presentation components, making the website easier to maintain and extend.

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22+
- npm 10+

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Quality Assurance

The project includes automated checks to support code quality, content integrity, and responsive behaviour.

```bash
npm run lint
npm run test
npm run build
```

An optional Playwright browser QA script is also available for checking navigation, interface interactions, responsive layouts, accessibility-related behaviour, and horizontal overflow across multiple screen sizes.

## Deployment

The application produces a fully static production build in the `dist/` directory.

It can be deployed to Vercel, Netlify, or other static hosting platforms.

**Production requirements:**
- Configure the production domain and canonical URL.
- Enable HTTPS.
- Verify profile images, project screenshots, social links, and CV download resources before deployment.

No backend service, database, or environment secrets are required.

---

**Kolawole Taiwo Olawale**  
Business Operations & Performance Professional | Power BI Data Analyst  
Lagos, Nigeria
