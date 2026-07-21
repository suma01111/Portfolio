# Sunita Choudhary — Portfolio

Personal portfolio site for **Sunita Choudhary**, a full-stack developer and Computer Science student at IIIT Vadodara. The site showcases experience, projects, skills, certifications, and a contact form — built as a fast, responsive React application.

**Live site:** [portfolio-tau-sandy-90.vercel.app](https://portfolio-tau-sandy-90.vercel.app)

## Features

- Editorial, motion-aware layout with scroll reveals and ambient background effects
- Responsive navigation with mobile menu and smooth in-page scrolling
- Sections for experience, projects, capabilities, journey, leadership, and contact
- Project cards with GitHub links and live demo support
- Skills displayed with devicon-style icons
- Contact form powered by [EmailJS](https://www.emailjs.com/) — no backend required
- Resume download and Open Graph metadata for social sharing

## Tech Stack

- **Frontend:** React 19, Vite 8
- **Styling:** Custom CSS with responsive layout and reduced-motion support
- **Email:** EmailJS (`@emailjs/browser`)
- **Linting:** ESLint 9

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Environment Variables

The contact form reads EmailJS credentials from Vite environment variables. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

For full setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

## Project Structure

```text
Portfolio/
├── public/          # Static assets (resume, profile image, OG image)
├── src/
│   ├── App.jsx      # Main portfolio content and layout
│   ├── index.css    # Global styles and design tokens
│   └── main.jsx     # App entry point
├── index.html
├── vite.config.js
└── package.json
```

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview the production build   |
| `npm run lint`    | Run ESLint                     |

## Connect

- **GitHub:** [suma01111](https://github.com/suma01111)
- **LinkedIn:** [sunita-choudhary-12941028a](https://www.linkedin.com/in/sunita-choudhary-12941028a/)
- **LeetCode:** [Shree9826](https://leetcode.com/u/Shree9826/)

## License

This project is open source and available for personal reference. Please do not reuse the personal content without permission.
