# ML Mastery Hub 🚀

A modern, interactive 3D learning platform designed to help developers and data enthusiasts master Machine Learning through structured curriculum, adaptive study planning, time tracking, and hands-on projects.

[ML Mastery]![Uploading image.png…]()


---

## ✨ Features

- 🎨 **Interactive 3D Canvas**: Built with Three.js & `@react-three/fiber`, featuring a dynamic neural network background with theme-aware color palettes.
- 📚 **134-Lesson Machine Learning Curriculum (CampusX)**: Comprehensive 14-module course covering Python data tools, EDA, feature engineering, missing data/outliers, PCA, linear/polynomial regressions, regularized models, logistic regression, Naive Bayes, SVM, decision trees, ensembles (Bagging, Random Forest, AdaBoost, Gradient Boosting, XGBoost), clustering (K-Means, DBSCAN), and hyperparameter optimization with Optuna.
- 📅 **Adaptive Study Planner**: Intelligent scheduling algorithm that distributes unfinished lessons based on your daily available hours and study days.
- ⏱️ **Time Tracker & Gamified Rewards**: Integrated study timer with live progress tracking, streaks, points, and unlockable badges (like _ML Warrior_ for 8-hour focus sessions).
- 🛠️ **Project Showcase & Submissions**: Dedicated project workspace with curated ML project ideas and user submission tracking.
- 🌓 **Dark & Light Mode**: Seamless dark-neon and light theme toggle across all UI elements and 3D scenes.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Routing & SSR**: [TanStack Router](https://tanstack.com/router/v1), [TanStack Start](https://tanstack.com/start/latest)
- **State & Data**: [TanStack Query](https://tanstack.com/query/v5), React Context & LocalStorage API
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://drei.docs.pmnd.rs/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), Radix UI primitives, Lucide Icons
- **Bundler & Build Tool**: [Vite 8](https://vitejs.dev/), Nitro Server Engine

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18 or higher (v24 recommended)
- **npm**: v9 or higher

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/learn-glow-sphere.git
   cd learn-glow-sphere
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

---

## 💻 Development & Building

### Start Development Server

Run the Vite dev server with hot module replacement:

```bash
npm run dev
```
Run TypeScript compilation check:

```bash
npx tsc --noEmit
```

Run ESLint and Prettier checks:

```bash
npm run lint
npm run format
```

### Production Build

Build client & server production bundles:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

## deployment  link:https://ml-mastery-bg7ql6bgq-error-422.vercel.app/

The project uses **Nitro** server engine, enabling easy deployment to multiple providers:

### Cloudflare Workers

```bash
npx nitro deploy --prebuilt
```

### Vercel / Netlify

Connect your repository directly to Vercel or Netlify. The build command `npm run build` will be detected automatically.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
