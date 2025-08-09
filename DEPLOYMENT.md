# Deployment Guide

This portfolio website is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Repository Setup
1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

### 2. Configure Base Path (if needed)
If your repository name is not your GitHub username (e.g., `username.github.io`), you need to configure the base path:

1. Open `next.config.js`
2. Uncomment and modify the `basePath` line:
   ```javascript
   basePath: '/your-repository-name',
   ```

### 3. Deployment Process
The deployment happens automatically when you:
- Push to the `main` branch
- Create a pull request to the `main` branch

### 4. Workflow Details
The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Install Node.js and dependencies
2. Build the Next.js application
3. Export it as static files
4. Deploy to GitHub Pages

### 5. Access Your Site
After successful deployment, your site will be available at:
- `https://yourusername.github.io` (if repo name is `yourusername.github.io`)
- `https://yourusername.github.io/repository-name` (for other repository names)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test static export locally
npm run build && npx serve out
```

## Troubleshooting

### Common Issues
1. **404 errors**: Make sure `basePath` is correctly configured in `next.config.js`
2. **Images not loading**: Ensure `images.unoptimized: true` is set in `next.config.js`
3. **Build failures**: Check the Actions tab in your GitHub repository for error logs

### Build Requirements
- Node.js 18 or higher
- All dependencies must be compatible with static export
- No server-side features (API routes, server components with dynamic data)

## Features Enabled for Static Export
- ✅ Client-side routing
- ✅ Static generation
- ✅ Image optimization (unoptimized mode)
- ✅ CSS and JavaScript bundling
- ✅ Framer Motion animations
- ✅ Responsive design

## Notes
- The site is built as a static export, meaning no server-side functionality
- All animations and interactions work client-side
- The build process generates static HTML, CSS, and JavaScript files
- GitHub Pages serves these files directly