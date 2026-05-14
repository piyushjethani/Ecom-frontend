# Shop Frontend

A React + Vite frontend for the Shop project, including Tailwind CSS, Redux Toolkit, React Router, and admin dashboards.

## Project Structure

- `src/` - React components and pages
- `src/pages/` - App routes including home, product, cart, orders, profile, auth, and admin views
- `src/components/` - UI components used across the app
- `src/redux/` - Redux slices and store configuration
- `public/` - Static assets

## Prerequisites

- Node.js 18 or newer
- npm 10 or newer (or yarn/pnpm if preferred)
- Backend server running in `../backend`

## Setup

### 1. Install frontend dependencies

```bash
cd frontend
npm install
```

### 2. Configure backend settings

The frontend expects a backend API to be running in the `backend` folder. Make sure the backend is installed and configured separately:

```bash
cd ../backend
npm install
```

If your backend requires environment variables, set them before starting the server.

### 3. Start the backend server

From the `backend` folder:

```bash
npm start
```

> If the backend uses a different start script, use that command instead.

### 4. Start the frontend dev server

From the `frontend` folder:

```bash
npm run dev
```

This launches the Vite development server. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

From the `frontend` folder, use:

- `npm run dev` - Start development server
- `npm run build` - Build production assets
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## Build for Production

```bash
cd frontend
npm run build
```

The built files are generated in the `dist/` folder.

## Notes

- The frontend uses React 19, Tailwind CSS v4, Redux Toolkit, and React Router DOM.
- If you add new environment variables for the frontend, use Vite prefix `VITE_` in `.env` files.
- Update backend and frontend API URLs consistently if the backend is served from a different host or port.


