import './App.css';
//Importing React
import React from "react";
//Importing ReactDOM
//Importing these packages from React DOM
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//And lastly, importing Home
import Home from './pages/Homes.js';


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
