##Frontend (React) Setup

This React app works with the ASP.NET Core backend API (PostgreSQL database). Make sure the backend is running before starting the frontend.

## 1️⃣ Install dependencies

Open a terminal in the frontend project folder and run:

npm install


This will install all required packages.

## 2️⃣ Verify the API URL

The frontend calls the backend API via services/api.jsx. Make sure the API URL matches your backend URL. For example:

// services/api.jsx
const api = axios.create({
  baseURL: "https://localhost:7012/api/staff", 
});


Replace your backend url https://localhost:7012/api/staff with the URL your backend is running on.

## 3️⃣ Start the frontend

Run the app with:

npm start


This will open the app at http://localhost:3000.

The app will fetch data from your backend using the URL in service/api.jsx.

## 4️⃣ Verify the connection

Make sure your backend API is running and accessible.

Test the frontend functionality (like fetching staff data).

Check the browser console for any errors (network issues, CORS errors).

## 5️⃣ Notes

The backend must allow CORS from http://localhost:3000 to work with React.

If the backend URL changes, update services/api.jsx accordingly.

PostgreSQL must be running and configured in your backend for API data to work
