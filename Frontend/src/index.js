import './scss/app.scss';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './App';
import ErrorPage from "./Pages/Error/ErrorPage";
import NotesLoader from './Pages/NotesLoader/NotesLoader';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    
  },
  {
    path:"/notes",
    element: <NotesLoader/>,
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/**
 * 
 * Secondary / Buttons: #ff4e03
 * 
 * 
 */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
