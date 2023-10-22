import React from "react";
import { useRouteError } from "react-router-dom";
import './error.css'
import './error.scss'
export default function ErrorPage(props) {
    const error = useRouteError();
    console.error(error);
  

    return (
      <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"60vh"}} id="error-page">
        <h1><a href="/" className="text-secondary highlight-text">&#8604; Go Back</a></h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.status} {error.statusText || error.message}</i>
        </p>
      </div>
    );
}