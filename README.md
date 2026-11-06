# 🛒 Bazar-Dor (বাজার দর)

### Smart Market Price Tracking & Comparison Platform

Bazar-Dor is a modern, responsive web application designed to help people explore, monitor, and compare the prices of everyday essential products across different markets in Bangladesh.

It provides an easy way to check market prices, compare minimum and maximum prices, view average prices, and track price fluctuations — all through a clean and user-friendly Bengali interface.

🌐 **Live Demo:** https://bazar-dor-seven-xi.vercel.app/

---

## ✨ Key Features

- **Market Price Overview:** Explore the latest prices of essential daily products.
- **Product Categories:** Browse products across rice, lentils, oil, vegetables, fish, meat, eggs, dairy, and spices.
- **Market-wise Price Comparison:** Compare product prices across different markets.
- **Minimum, Maximum & Average Prices:** Get a better understanding of market price ranges.
- **Price Trends:** Identify products with increasing or decreasing prices.
- **Product Sorting:** Organize products based on available sorting options.
- **Dynamic Product Pages:** View individual product information through dynamic routes.
- **User Authentication:** Secure authentication with Better Auth.
- **Social Authentication:** Google and GitHub sign-in integration.
- **Protected Routes:** Restrict access to authorized pages using Next.js Proxy.
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop devices.
- **Bengali Interface:** Designed with a user-friendly Bengali experience.

---

## 🛠️ Technology Stack

### Frontend
- [Next.js](https://nextjs.org/) – React framework for modern web applications.
- [React](https://react.dev/) – Component-based UI development.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework.
- [DaisyUI](https://daisyui.com/) – Tailwind CSS component library.
- [HeroUI](https://www.heroui.com/) – Modern and accessible UI components.

### Authentication & Routing
- [Better Auth](https://www.better-auth.com/) – Authentication and session management.
- Next.js Proxy – Request interception and protected route handling.
- Next.js App Router – File-system-based routing and dynamic routes.

### Libraries & Utilities
- [Lucide React](https://lucide.dev/) – Modern icon library.
- [React Icons](https://react-icons.github.io/react-icons/) – Additional icon collections.
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee) – Scrolling market price ticker.
- [React Hot Toast](https://react-hot-toast.com/) – Toast notifications.

### Deployment
- [Vercel](https://vercel.com/) – Application deployment and hosting.
- Git & GitHub – Version control and source code management.

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Navigate to the Project Directory

```bash
cd YOUR_REPOSITORY
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the required environment variables.

```env
# Better Auth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Database
DATABASE_URL=your_database_connection_string

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

**Important:** Adjust the environment variable names according to your actual Better Auth and database configuration. Never commit your `.env.local` file or expose secret credentials.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the application.

---

## 🔐 Authentication

Bazar-Dor uses Better Auth to handle user authentication and session management.

Authentication features include:

- Email and password authentication.
- Google OAuth authentication.
- GitHub OAuth authentication.
- Session management.
- Protected routes using Next.js Proxy.

Protected pages require an authenticated user session before access is granted.

---

## 📱 Responsive Design

The application is designed to provide a consistent experience across different screen sizes.

- **Mobile:** Optimized navigation, responsive product layouts, and horizontally scrollable tables.
- **Tablet:** Flexible layouts with improved spacing.
- **Desktop:** Wider content sections, structured product grids, and detailed market comparisons.

---

## 📂 Project Structure

The project follows the Next.js App Router architecture.

```text
bazar-dor/
│
├── public/
│   ├── images/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── category/
│   │   ├── product/
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── sign-in/
│   │   ├── sign-up/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   │
│   ├── lib/
│   │   ├── auth.js
│   │   └── auth-client.js
│   │
│   └── ...
│
├── proxy.js
├── public/
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

*Note: This is an illustrative structure. Your actual project directory may differ.*

---

## 🔮 Future Improvements

- Real-time market price updates.
- Advanced product search and filtering.
- Historical price charts and analytics.
- Market location-based price discovery.
- User-submitted market price reports.
- Personalized watchlists and favorite products.
- Admin dashboard for managing products and market prices.
- Price alerts and notifications.

---

## 🎯 Project Goal

The primary goal of Bazar-Dor is to make everyday market price information more accessible and understandable.

By providing market-wise price comparisons and useful price insights, the platform aims to help consumers make more informed purchasing decisions.

---

## 👨‍💻 Author

**Developed by:** Mahabubul Alam

**GitHub:** [Your GitHub Profile](https://github.com/Maha-bub)

**Live Project:** https://bazar-dor-seven-xi.vercel.app/

---

⭐ If you find this project useful, consider giving it a star on GitHub!

**Made with ❤️ using Next.js and modern web technologies.**