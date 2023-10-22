import React from "react";
import NavBar from './Navigation/navbar';
import BackgroundParticles from './BGParticles/particles';
import RotatingCube from "./ThreeJS/RotatingCube";
import './MainPage.css';

export default function MainPage() {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <BackgroundParticles />
      <NavBar />
      <h1 className="text-center">Still Under Construction</h1>
      <div className="container-fluid justify-content-center">
        <div className="justify-content-center align-items-center" id="cubeHolder">
          <RotatingCube parent="cubeHolder"/>
        </div>
      </div>
    </div>
  );
}