# SunCart — Summer Essentials Store

SunCart is a modern, responsive eCommerce demo built with Next.js and Tailwind CSS. It showcases a small catalogue of summer essentials (sunglasses, hats, skincare, bottles, and more) with authentication using BetterAuth and a simple profile/update flow.

Live demo: https://sun-cart-tau.vercel.app

<img width="1313" height="896" alt="image" src="https://github.com/user-attachments/assets/e128213a-fbf8-46a8-ace4-46da43f25000" />


## Key Features

- Clean, responsive layout with persistent Navbar and Footer
- Home page with hero banner, popular products, summer care tips, and top brands
- Static product data in `public/products.json` (6 example products)
- Products listing and product details pages (route: `/products`, `/popularSection/[id]`)
- Authentication with BetterAuth (email/password + Google social login)
- Protected routes for product details and profile (redirects to `/login` if unauthenticated)
- User profile page and profile update form (`/profile`, `/profile/editprofile`)
- Basic purchase CTA on product details
- Animations using `animate.css`

## Tech Stack

- Next.js (App Router)
- React 19
- Tailwind CSS + DaisyUI
- BetterAuth (authentication)
- MongoDB adapter (server-side persistence)
- HeroUI (`@heroui/react`) for UI primitives
- animate.css for entrance animations
- react-toastify for user notifications

## Notable npm packages

- `better-auth`, `@better-auth/mongo-adapter`
- `next`, `react`, `react-dom`
- `tailwindcss`, `daisyui`
- `@heroui/react`, `animate.css`, `react-toastify`, `react-icons`, `lucide-react`

## Project Structure (important files)

- `app/layout.js` — Root layout with persistent Navbar & Footer
- `app/page.js` — Home page composition (Hero, Popular, Tips, Companies)
- `public/products.json` — Product data source
- `app/products/page.jsx` — Products listing
- `app/popularSection/[id]/page.jsx` — Product details (protected)
- `app/login/page.jsx` — Login page
- `app/signup/page.jsx` — Signup page
- `app/profile/page.jsx` & `app/profile/editprofile/page.jsx` — Profile and update
- `src/lib/auth.js` — BetterAuth server config (reads env vars)
- `src/lib/auth-client.js` — BetterAuth client helper

## Environment Variables

Create a `.env` file (or configure platform env vars) with at least:

- `MONGODB_URI` — MongoDB connection string (used by BetterAuth adapter)
- `GOOGLE_CLIENT_ID` — Google OAuth client ID (for social login)
- `GOOGLE_CLIENT_SECRET` — Google OAuth client secret

Example `.env` (do not commit):

```
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/sun-cart
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Run locally

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Authentication notes

- Sign up / Sign in pages are implemented using BetterAuth client helpers in `src/lib/auth-client.js`.
- Google social login buttons are present on both login and signup pages.
- Protected routes are enforced by `src/proxy.js` middleware which redirects to `/login` when there is no session.




## Deployment

Deploy to Vercel or Render. On Vercel, set the environment variables in the project settings and deploy the repository. Ensure the `MONGODB_URI` and Google OAuth callback URLs are configured correctly.




