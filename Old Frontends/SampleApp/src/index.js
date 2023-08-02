import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./Auth0Provider";
import history from "./utils/history";
import { getConfig } from "./config";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
  ,
  
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
