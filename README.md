# ML Mastery Hub

Here is a detailed prompt you can use to generate the website you described. It includes the 3D wallpaper, the full ML course based on the playlist you provided, an AI time scheduler, and a reward system.

Prompt:

Create a fully responsive, modern educational website called "ML Mastery" with the following features:

1. 3D Animated Wallpaper

Use a full-screen, interactive 3D background (e.g., using Three.js) with floating geometric shapes, particles, or a neural network-style animation.

The wallpaper should be subtle, performance-friendly, and not distract from the content.

Add a dark/light mode toggle that changes the 3D scene's color palette.

2. Machine Learning Full Course (Based on the Provided Playlist)

The course should be structured as a curriculum with modules and lessons.

Include all 38 videos from this playlist: Krish Naik Hindi - Machine Learning Playlist

Each lesson page should have:

The YouTube video embedded.

A brief text summary of the topic.

A "Mark as Complete" button.

A progress bar for the overall course.

Organize topics logically (e.g., Introduction, Regression, Classification, Ensemble, Unsupervised, etc.) based on the playlist order:

Introduction to ML

Simple Linear Regression

Linear Regression Practical

MSE, MAE, RMSE

Ridge and Lasso Regression

Ridge and Lasso Practical

ElasticNet Regression

Logistic Regression Intuition

Logistic Regression Practical

Naive Bayes (Part 1 & 2)

K-Nearest Neighbors

Overfitting, Underfitting, Bias-Variance

Performance Metrics

Support Vector Machine (Classifier, Regression, Kernels)

Decision Tree (Classifier, Pruning, Practical, Regression)

Training/Test/Validation Data

Cross-Validation (Python & Types)

Ensemble Techniques (Bagging vs Boosting)

Random Forest

OOB Evaluation

Automated EDA (Pandas Profiling, Autoviz, SweetViz, Dtale)

R-squared and Adjusted R-squared

Boosting, Adaboost, Gradient Boosting

Unsupervised Learning (K-Means, DBSCAN, Hierarchical)

Anomaly Detection (Isolation Forest, DBSCAN, LOF)

3. AI Time Scheduler & Study Planner

A dashboard where the user inputs:

Available study hours per day.

Preferred study days (e.g., Mon-Fri).

Target completion date (optional).

The AI (simulated with a scheduling algorithm) will:

Automatically distribute the course topics across the available days.

Create a daily study plan with specific lessons to watch.

Adjust the plan if the user falls behind or speeds up.

The schedule should be displayed in a calendar or list view.

4. Time Tracker & Reward System

A timer that tracks daily study hours (manual start/stop or Pomodoro-style).

When the user studies for 8+ hours in a day, they receive a reward:

A badge (e.g., "ML Warrior").

A congratulatory animation (confetti, 3D effect).

Points that accumulate for unlocking new themes or 3D wallpaper variations.

A progress dashboard showing:

Total study hours.

Streak days.

Badges earned.

Course completion percentage.

5. Project Section

A dedicated page for "Projects" where users can:

Browse project ideas related to each ML topic.

Submit their own project links.

Track project completion.

Include a simple project submission form (title, description, GitHub link, demo link).

6. Tech Stack & Design

Frontend: HTML, CSS (Tailwind or custom), JavaScript (React or vanilla).

3D: Three.js or Spline.

Backend (optional): Firebase or Node.js for user data, progress, and scheduling.

UI/UX: Clean, modern, with smooth animations. Use a dark theme by default with neon accents.

Responsiveness: Fully mobile-friendly.

7. Additional Features

User authentication (sign up/login) to save progress.

Notifications/reminders for study sessions.

Community forum or comment section for each lesson.

Search bar for quick lesson access.

Output: Provide the complete code structure (HTML, CSS, JS files) or a single HTML file with embedded scripts. Ensure the 3D wallpaper works and the course list matches the provided playlist.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fe9edd8f-b75b-4fcb-92dd-be6875f5ea0b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
