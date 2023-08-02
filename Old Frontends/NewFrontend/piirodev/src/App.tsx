import React from 'react';
import logo from './logo.svg';
import { Router, Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from "history";
import { Container } from "reactstrap";

import './App.css';

const history = createMemoryHistory();

const domain = process.env.REACT_APP_AUTH0_DOMAIN;


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
      <div id="app" className="d-flex flex-column h-100">
        <Routes>
          <Container className="flex-grow-1 mt-5">
            <Route path="/" element={null} />
            <Route path="/profile" element={null} />
            <Route path="/external-api" element={null} />
            <Route path="/callback" element={null} />
          </Container>
        </Routes>

      </div>
  );
}

export default App;
