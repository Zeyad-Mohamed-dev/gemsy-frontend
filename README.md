# Hidden Gems Frontend

Hidden Gems is a platform designed to help users discover unique and interesting places ("gems") in their cities. It connects users with local businesses and offers features for finding, reviewing, and sharing these hidden spots. The platform supports multiple roles including Users, Business Owners, and Administrators.

## Features

- **User Accounts**: Sign up, login (including Google OAuth), and profile management.
- **Roles & Permissions**: Distinct dashboards and features for Users, Owners, and Admins.
- **Discover Places**: Interactive map search and categorized lists of places.
- **Wishlist**: Save favorite gems for later.
- **Business Management**: Owners can add and manage their business listings ("Gems") and vouchers.
- **Vouchers & Transactions**: Redeemable vouchers and transaction tracking.
- **Social Features**: Reviews, ratings, and "Created by You" lists.
- **Internationalization (i18n)**: Support for multiple languages (English/Arabic) with RTL/LTR layout.
- **Dark Mode**: Built-in dark/light theme capability.
- **Responsive Design**: Mobile-friendly layout for all devices.

## Tech Stack

This project is built with a modern React stack:

### Core
- **[React](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for fast builds and HMR.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: State management for the application.
- **[React Router](https://reactrouter.com/)**: Client-side routing.

### UI & Styling
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework.
- **[Material UI (MUI)](https://mui.com/)**: React UI components.
- **[Framer Motion](https://www.framer.com/motion/)** & **[GSAP](https://greensock.com/gsap/)**: For smooth animations.
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons.

### Maps
- **[Leaflet](https://leafletjs.com/)** & **[React Leaflet](https://react-leaflet.js.org/)**: Interactive maps for finding gems.

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)**: Performant, flexible and extensible forms.
- **[Zod](https://zod.dev/)**: TypeScript-first schema declaration and validation.

### Other Tools
- **Axios**: HTTP client for API requests.
- **i18next**: Internationalization framework.
- **React Hot Toast** & **Sonner**: For toast notifications.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hidden-gems-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add the necessary environment variables. You can reference `.env.example` if available.
   Example:
   ```env
   VITE_CLIENT_ID=your_google_client_id
   # Add other API endpoints or keys here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Preview the production build locally.

## Project Structure

- `src/Components`: Reusable UI components.
- `src/Pages`: Page components corresponding to routes.
- `src/redux`: Redux slices and store configuration.
- `src/Services`: API service functions.
- `src/assets`: Static assets like images and fonts.
- `src/utils`: Helper functions and utilities.
- `src/config`: App configuration files.
