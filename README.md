# Lindokuhle's Portfolio - Computer Vision & Robotics

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Showcases projects in computer vision, robotics, embedded systems, and IT applications.

## Features

- **Modern Design**: Dark theme with neon green and cyan accents inspired by tech/hacker aesthetics
- **Smooth Animations**: Framer Motion animations for scroll effects and interactions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Multiple Sections**:
  - Hero section with animated typing effect
  - About section with education/experience timeline
  - Skills section with proficiency bars and tech tags
  - Projects section with filterable categories and video embeds
  - Contact form with email integration
  - Footer with navigation and social links

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **UI Components**: Radix UI

## Project Structure

```
portfolio2/
├── src/
│   ├── components/portfolio/
│   │   ├── Layout.jsx          # Main layout wrapper
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── HeroSection.jsx     # Hero/landing section
│   │   ├── AboutSection.jsx    # About & timeline
│   │   ├── SkillsSection.jsx   # Skills & expertise
│   │   ├── ProjectsSection.jsx # Projects showcase
│   │   ├── ContactSection.jsx  # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── api/
│   │   └── base44Client.js     # API client for email
│   ├── styles/
│   │   └── globals.css         # Global styles & CSS variables
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── public/                      # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
├── jsconfig.json               # JS config with path aliases
├── postcss.config.js           # PostCSS plugins
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The website will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Customization

### Colors
- Primary: Green (#00ff80)
- Secondary: Cyan (#00d4ff)
- Background: Dark (#080c10)

Modify Tailwind classes in components or update `tailwind.config.js` for global color changes.

### Content
- **About**: Edit [AboutSection.jsx](src/components/portfolio/AboutSection.jsx)
- **Projects**: Modify `projectGroups` array in [ProjectsSection.jsx](src/components/portfolio/ProjectsSection.jsx)
- **Skills**: Update `skillGroups` in [SkillsSection.jsx](src/components/portfolio/SkillsSection.jsx)
- **Contact**: Update email recipient in [ContactSection.jsx](src/components/portfolio/ContactSection.jsx)

### Fonts
Global fonts are imported in [Layout.jsx](src/components/portfolio/Layout.jsx):
- **UI**: Inter (via Google Fonts)
- **Code**: JetBrains Mono (via Google Fonts)

Change the import URL in the `<style>` tag to use different fonts.

## API Integration

The contact form uses a mock Base44 SDK client. For real email functionality:

1. Install Base44 SDK: `npm install @base44/sdk`
2. Configure authentication in `src/api/base44Client.js`
3. Replace the mock client with actual SDK implementation

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
Update `vite.config.js` with:
```js
export default {
  base: '/repository-name/',
  // ...
}
```

## Navigation

The website uses smooth scroll navigation. All sections have IDs for linking:
- `#hero` - Hero section
- `#about` - About section
- `#skills` - Skills section
- `#projects` - Projects section
- `#contact` - Contact section

## Performance

- ✅ Lazy loading with Framer Motion's `useInView`
- ✅ Optimized images
- ✅ CSS purging with Tailwind
- ✅ Fast build with Vite

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2025 Lindokuhle. All rights reserved.

## Contact

- Email: lindokuhlemaphonyane976@gmail.com
- LinkedIn: [Lindokuhle Promise Maphonyane](https://www.linkedin.com/in/lindokuhle-promise-maphonyane)
- GitHub: [CosmcChild369](https://github.com/CosmcChild369)
- Twitter/X: [@lindokuhle](https://x.com/lindokuhle)

---

Built with Python, OpenCV & a passion for engineering 🤖
