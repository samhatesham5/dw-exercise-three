import './App.css';
//Importing React
import React from "react";
//Importing ReactDOM
import ReactDOM from "react-dom/client";
//Importing these packages from React DOM
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
//And lastly, importing Home
import Home from './pages/Home';
import {WEATHER_APP_API_KEY} from "./API_KEYS.js"; 


//Creating our path to the main page 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* Where React Router comes into play*/}
      <RouterProvider router={router} />
      <p></p>
    </div>
  );
}

export default App;
