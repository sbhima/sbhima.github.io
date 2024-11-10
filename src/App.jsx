import React from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Bounds, useBounds, OrbitControls,Stars, Html } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import planetData from "./planetData";
import { useState } from "react";
import { EffectComposer, Bloom, ToneMapping } from "@react-three/postprocessing";
import { Suspense } from 'react'

import Welcome from './pagedivs/Welcome'
import Home from './pagedivs/Home'
import Loading from './pagedivs/Loading'
import About from './pagedivs/About'
import Projects from './pagedivs/Projects'
import Contact from './pagedivs/Contact'

import "./styles/mainStyles.css";
import "./styles/globals.css";

import github_icon from './media/github-icon.png'




export default function App() {

  const animate = React.useRef(true);
  const page = React.useRef(0);


  const orbitref = React.useRef();
  const [paused, setPaused] = useState([10,13,25]);
  

  function pause(msg,p_size) {
    setPaused(msg);
    animate.current = !animate.current;
    page.current = p_size.size;
  }

  
  return (
    <>
      <Suspense fallback={<Loading />}>
      <Loading/>
      
      <div className="navbar">
        <button  className="home-button" onClick={() => { 
          orbitref.current.reset();
          animate.current = true;
          setPaused([10,13,25]);
          console.log( `button${animate.current}`);
          page.current = 0;
        }}>
          Home
        </button>

        <img  src={github_icon} 
              alt="github" 
              cursor="pointer"
              className="github-icon" 
              onClick={() => window.open("https://github.com/SBhima/shivank-portfolio")}
              width={30}
              height={30}/>


      </div>

      {page.current === 0 && (<Home />)}
      {page.current === 1.7 && (<Welcome />)}
      {page.current === 1.1 && (<About />)}
      {page.current === 1.3 && (<Projects />)}
      {page.current === 0.8 && (<Contact />)}
      



      <Canvas camera={{ position: paused, fov: 44 }} dpr={[1, 2]} >
        

      <Lights />

        <EffectComposer disableNormalPass>
          <Bloom mipmapBlur luminanceThreshold={1} levels={4} intensity={0.24} />
          <ToneMapping />
        </EffectComposer>

        <Sun />
        <Stars radius={15} depth={82} count={22000} factor={4.3} saturation={1} fade={10} speed={1.5} />

        
        <Bounds fit clip observe margin={0.72}>
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} pl_animate={animate} pause_func={pause} />
        ))}
        </Bounds>
        

        <OrbitControls ref={orbitref} />

      </Canvas>

      </Suspense>
    </>
  );
}
function Sun() {
  const sunRef = React.useRef();
  
  return (
    <mesh >
      <sphereGeometry args={[2.5, 20, 20]} />
      <meshStandardMaterial color="#ffff00" emissive={"#ffff00"} emissiveIntensity={2} toneMapped={false} />
    </mesh>
  );
}
function Planet({ planet: { color, xRadius, zRadius, size, speed, offset,name,textureName, rotationSpeed}, pl_animate, pause_func }) {
  const planetRef = React.useRef();
  const api = useBounds()
  
  useFrame(({ clock }) => {
    if (pl_animate.current){
      const t = clock.getElapsedTime() * speed + offset;
      const x = xRadius * Math.sin(t);
      const z = zRadius * Math.cos(t);
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  const planetMap = useLoader(TextureLoader, textureName)

  return (
    <>
      <mesh ref={planetRef} onClick={(e) => {
                          e.stopPropagation();
                          console.log(`planet${size} has been clicked at location${[planetRef.current.position.x,0,planetRef.current.position.z]}`);
                          pause_func([planetRef.current.position.x,0,planetRef.current.position.z],{size});
                          e.delta <= 2 && api.refresh(e.object).fit();
                          }} >
        <sphereGeometry args={[size, 20, 20]} />
        <meshStandardMaterial map={planetMap} color={color} />
        <Html distanceFactor={13.5} zIndexRange={[5,0]} >
          <div className="annotation" style={{transform: `translate3d(-50%, -${(size*30.6)+175}%, 0)`}} >{name}</div>
        </Html>
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[0, 0, 0]} intensity={500} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}
