# Detailed Prompt for Copilot Pro – IES Static Website (Based on CDC.com.pk)

## Objective
Recreate the existing **CDC.com.pk** WordPress website as a **modern, mobile-responsive static React.js website** for **IES (Integrated enviromental solution)**. The new site will:
- Replace all references to **CDC** with **IES**.
- Exclude the **News** section entirely.
- Maintain all other pages, structure, and content consistency.
- Include smooth animations, transitions, and responsive layouts.
- Use a professional design aesthetic with the existing IES logo (already provided in the project folder).

## Core Requirements
1. **Framework:** React.js (Static Site)
2. **Styling:** Tailwind CSS or CSS Modules (developer’s choice)
3. **Animations:** Use Framer Motion or React Spring for transitions and effects.
4. **Responsiveness:** Ensure full responsiveness across devices (desktop, tablet, mobile).
5. **Data Source:** Content (text and images) should be **fetched directly from the current WordPress site (CDC.com.pk)** and then **manually integrated** into the static site.
6. **SEO Optimization:** Add meta tags, titles, and descriptions for each page similar to CDC.com.pk.
7. **Logo:** Replace all CDC logos and branding with the provided **IES logo**.
8. **Color Theme:** Use a clean and professional color scheme similar to the current CDC palette, but customized slightly for IES branding.
9. **Hosting:** The website will be deployable as a static site (Vercel, Netlify, or GitHub Pages).

## Pages to Include (All from CDC.com.pk except News Section)
1. **Home** – Hero section, about highlights, call to action, and footer.
2. **About Us** – Mission, vision, values, leadership, and organization overview.
3. **Services** – List of offered services with icons and descriptions.
4. **Products** – Information about offered products or solutions.
5. **Clients** – Showcase of clients and partnerships.
6. **Projects** – Key completed or ongoing projects with descriptions and images.
7. **Team** – Profiles of team members or faculty.
8. **Contact Us** – Contact form, map, phone numbers, and email.
9. **Careers** – Job openings or career-related information.
10. **FAQ / Support** – Frequently asked questions or support information.

> ⚠️ **Exclude:** Entire **News** or **Blog** section from the site.

## Functional Expectations
- Smooth page transitions using Framer Motion.
- Animated scrolling and section reveals.
- Static routing using React Router.
- Lazy loading of images for performance.
- Accessibility compliance (alt tags, aria-labels, keyboard navigation).

## Folder Structure Example
```
ies-website/
├── public/
│   ├── logo.png
│   ├── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── Clients.jsx
│   │   ├── Projects.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── Careers.jsx
│   │   ├── FAQ.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── styles/
│   │   ├── global.css
```

## Additional Notes
- Keep all text, headings, and structure consistent with the current CDC.com.pk layout but rebrand everything to **IES**.
- Ensure all pages work smoothly without requiring server-side rendering.
- Focus on professional layout, balanced spacing, readable typography, and minimal but elegant animations.
- Prioritize mobile usability and fast loading times.

---
**End of Detailed Prompt**
