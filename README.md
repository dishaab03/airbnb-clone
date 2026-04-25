# 🏡 Airbnb Clone — Our Journey

Welcome to our project! This is a full-stack Airbnb clone built with a lot of love, caffeine, and collaborative problem-solving. We wanted to see if we could recreate that iconic, smooth travel experience from scratch, and we’re pretty proud of what we’ve built.

## 🤝 The Team
This project was a true team effort:
*   **Dishaa**: Focused on the "WOW" factor—polishing the UI/UX, implementing the search functionality, pagination, and making sure the deployment on Vercel worked flawlessly.
*   **Diovyansha**: The architect behind the scenes—handling the core logic, global state management (Context API), and setting up the mock data structure that powers everything.

## ✨ Features We Built
*   **Pixel-Perfect UI**: We spent a lot of time on the spacing, shadows, and those tiny micro-animations to make it feel premium.
*   **Smart Search**: You can actually search by location, guests, and dates. It’s not just a placeholder—it actually filters through our database!
*   **Endless Discovery**: We implemented a "Show More" pagination system so the homepage stays fast while still letting you explore dozens of listings.
*   **Your Favorites**: A fully functional Wishlist using Local Storage, so your favorite spots are saved even if you refresh.
*   **Vercel-Ready Backend**: We didn't want to just have a local app. We configured a serverless JSON-Server backend so you can actually visit the live site and see it in action.

## 🛠️ The Tech Stack
*   **Frontend**: React.js
*   **Routing**: React Router DOM (v6/v7)
*   **State Management**: Context API (Listings, Filters, Wishlist, and Bookings)
*   **Styling**: Modern Vanilla CSS (No generic templates here!)
*   **Backend**: JSON-Server deployed via Vercel Serverless Functions

## 🚀 Run it Yourself
If you want to play around with the code:

1.  **Clone the repo**:
    ```bash
    git clone https://github.com/dishaab03/airbnb-clone.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the magic**:
    ```bash
    npm run dev
    ```
    *This will start both the React frontend (Port 3000) and the JSON-Server backend (Port 3001) simultaneously!*

## 📝 A Final Note
Building this wasn't always easy—especially getting the serverless functions to talk to our `db.json` on Vercel—but it was a great learning experience. We hope you enjoy browsing the listings as much as we enjoyed building them!

---
*Created for our WAP project by Dishaa and Diovyansha.*
