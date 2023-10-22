import {React, useEffect } from "react";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';

export default function RotatingCube(props) {
    useEffect(() => {
        const parent = document.getElementById(props.parent);

        const parentH = parent.clientWidth;
        const parentW = parent.clientHeight;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 50, parentH  / parentW, 1, 1000 );
        camera.position.z = 96;
        const canvas = document.getElementById('threeJSCanvas');
        const renderer = new THREE.WebGLRenderer({
          canvas, antialias: true, alpha:true,
        });

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableDamping = true;

        // controls.dampingFactor = 0.05;

        controls.update();

        renderer.setSize( parentH, parentW );
        

        parent.appendChild( renderer.domElement );
    
    

        const boxGeom = new THREE.BoxGeometry(32,32,32);
        const boxColor = new THREE.MeshPhongMaterial( {color: 0xff4e03 });
        const boxMesh = new THREE.Mesh(boxGeom, boxColor);

        var boxLine = new THREE.EdgesGeometry( boxGeom );
        var mat = new THREE.LineBasicMaterial( { color: 0x000000 } );
        var wireframe = new THREE.LineSegments( boxLine, mat );
        boxMesh.add(wireframe);
        scene.add(boxMesh);

    
        const ambientLight = new THREE.AmbientLight(0xffffff, 5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);
    
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 5);
        directionalLight.target = boxMesh;

        scene.add(directionalLight);




        const animate = () => {
          boxMesh.rotateX(0.01);
          boxMesh.rotateY(0.01);
          boxMesh.rotateZ(0.005);
          directionalLight.rotateX(1);
          directionalLight.rotateY(0.5);

          window.requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);

        };
        animate();
      })


    return (
        <div>
            <canvas id="threeJSCanvas" style={{width: "400px", height:"400px"}}/>
        </div>
    )
}