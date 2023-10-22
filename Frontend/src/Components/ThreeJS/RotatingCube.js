import {React, useEffect } from "react";
import * as THREE from 'three';

export default function RotatingCube(props) {
    useEffect(() => {
        const parent = document.getElementById(props.parent);

        const parentH = parent.clientWidth;
        const parentW = parent.clientHeight;
        
        console.log(`${parent.id} Size: ${parentW} x ${parentH}`)
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 50, parentH  / parentW, 1, 1000 );
        camera.position.z = 96;
        const canvas = document.getElementById('threeJSCanvas');
        const renderer = new THREE.WebGLRenderer({
          canvas, antialias: true, alpha:true,
        });
    
        renderer.setSize( parentH, parentW );
        

        parent.appendChild( renderer.domElement );
    
    

        const boxGeom = new THREE.BoxGeometry(32,32,32);
        const boxColor = new THREE.MeshPhongMaterial( {color: 0xff4e03 });
        const boxMesh = new THREE.Mesh(boxGeom, boxColor);

        var geo = new THREE.EdgesGeometry( boxGeom );
        var mat = new THREE.LineBasicMaterial( { color: 0x000000 } );
        var wireframe = new THREE.LineSegments( geo, mat );
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

          renderer.render(scene, camera);
          window.requestAnimationFrame(animate);
        };
        animate();
      })


    return (
        <div>
            <canvas id="threeJSCanvas" style={{width: "400px", height:"400px"}}/>
        </div>
    )
}