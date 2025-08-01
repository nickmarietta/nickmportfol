# Nicklaus Marietta - Portfolio

A clean, professional portfolio website built with SvelteKit and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with SvelteKit for optimal performance
- **Accessible**: Semantic HTML and proper accessibility features

## Sections

- **Hero**: Introduction and call-to-action
- **Projects**: Showcase of key projects with descriptions
- **About**: Personal background and interests
- **Skills**: Technical skills with progress indicators
- **Contact**: Social links and contact information

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Deployment**: Vercel (configured)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.svelte      # Navigation header
│   ├── Footer.svelte      # Footer with social links
│   ├── Main.svelte        # Main content sections
│   ├── Step.svelte        # Project card component
│   └── CardBody.svelte    # Reusable card component
├── routes/
│   ├── +layout.svelte     # App layout
│   └── +page.svelte       # Home page
└── app.css               # Global styles
```

## Customization

- Update project information in `src/components/Main.svelte`
- Modify skills and levels in the skills section
- Update social links in `src/components/Footer.svelte`
- Customize colors and styling in `src/app.css`

## License

MIT License - feel free to use this template for your own portfolio!
