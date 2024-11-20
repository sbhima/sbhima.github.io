import React, { useMemo } from "react";
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import { Bounds, useBounds, OrbitControls, Stars, Html } from "@react-three/drei";
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
import { uniform } from "three/webgpu";




export default function App() {

  const planetAnimate = React.useRef(true);
  const [page, setPage] = useState(0);


  const orbitref = React.useRef();
  const [paused, setPaused] = useState([10, 13, 25]);


  // todo replace with use memo to memoize function
  const pause = useMemo(() => {
    return (msg, p_size) => {
      setPaused(msg);
      planetAnimate.current = !planetAnimate.current;
      setPage(p_size.size);
    }
  }, [planetAnimate, setPaused, setPage]);


  return (
    <>
      <Suspense fallback={<Loading />}>
        <Loading />

        <div className="navbar">
          <button className="home-button" onClick={() => {
            orbitref.current.reset();

            planetAnimate.current = true;
            // setPaused([10,13,25]);
            console.log(`button${planetAnimate.current}`);
            setPage(0);
          }}>
            Home
          </button>

          <img src={github_icon}
            alt="github"
            cursor="pointer"
            className="github-icon"
            onClick={() => window.open("https://github.com/SBhima/shivank-portfolio")}
            width={30}
            height={30} />


        </div>

        {page === 0 && (<Home />)}
        {page === 1.7 && (<Welcome />)}
        {page === 1.1 && (<About />)}
        {page === 1.3 && (<Projects />)}
        {page === 0.8 && (<Contact />)}




        <Canvas camera={{ position: paused, fov: 44 }} dpr={[1, 2]} >


          <Lights />

          {/* <EffectComposer disableNormalPass>
          <Bloom mipmapBlur luminanceThreshold={1} levels={4} intensity={0.44} />
          <ToneMapping />
        </EffectComposer> */}

          <Sun />
          <Stars radius={15} depth={82} count={22000} factor={4.3} saturation={1} fade={10} speed={1.5} />


          <Bounds fit clip observe margin={0.72}>
            {planetData.map((planet) => (
              <Planet planet={planet} key={planet.id} pl_animate={planetAnimate} pause_func={pause} />
            ))}
          </Bounds>


          <OrbitControls ref={orbitref} />

        </Canvas>

      </Suspense>
    </>
  );
}

extend({
  ShaderMaterialCustom: THREE.ShaderMaterial
});

function Sun() {
  const sunRef = React.useRef();
  const material = React.useRef();

  const uniforms = useMemo(
    () => ({
      time: { value: 0.0 },
      intensity: { value: 1.0 }
    }),
    []
  )
  
  useFrame(({ clock }) => {

    uniforms.time.value = clock.getElapsedTime() * 0.7;
    uniforms.intensity.value = 1.0 + 0.5 * Math.sin(clock.getElapsedTime() * 2.0);
    sunRef.current.rotation.y += 0.02;

  });


  return (
    <>
    {console.log(uniforms)}
      <mesh ref={sunRef}>
        <sphereGeometry args={[2.5, 44, 44]} />
        <shaderMaterialCustom
          ref={material}
          uniforms={uniforms}
          vertexShader={`
          varying vec2 vUv;
          varying float vDistanceFromCenter;
          void main() {
            vUv = uv;
            vDistanceFromCenter = distance(position, vec3(0.0, 0.0, 0.0)) / 2.5;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
          fragmentShader={`
          uniform float time;
          uniform float intensity;
          varying vec2 vUv;
          varying float vDistanceFromCenter;

          void main() {
            float noise = (sin(vUv.x * 10.0 + time * 2.0) + sin(vUv.y * 10.0 + time * 2.0)) * 0.5 + 0.5;
            vec3 color = mix(
              vec3(0.98, 0.43, 0.0),
              mix(
                vec3(1.0, 0.76, 0.35),
                vec3(0.8, 0.26, 0.0 ),
                sin(time * 1.7)
              ),
              noise * intensity
            );
            gl_FragColor = vec4(color, smoothstep(0.9, 1.0, vDistanceFromCenter)  );
          }
        `}
          toneMapped={false}
        />
      </mesh>

      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0.8}
          levels={4}
          intensity={0.7}
          color={new THREE.Vector3(1, 0.6, 0.2)}
        />
      </EffectComposer>
    </>


    // <mesh >
    //   <sphereGeometry args={[2.5, 32, 32]} />
    //   <meshStandardMaterial color="#ffff00" emissive={"#ffa500"} emissiveIntensity={2} toneMapped={false} />
    // </mesh>
  );
}
function Planet({ planet: { color, xRadius, zRadius, size, speed, offset, name, textureName, rotationSpeed }, pl_animate, pause_func }) {
  const planetRef = React.useRef();
  const api = useBounds()

  useFrame(({ clock }) => {
    if (pl_animate.current) {
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
        console.log(`planet${size} has been clicked at location${[planetRef.current.position.x, 0, planetRef.current.position.z]}`);
        pause_func([planetRef.current.position.x, 0, planetRef.current.position.z], { size });
        e.delta <= 2 && api.refresh(e.object).fit();
      }} >
        <sphereGeometry args={[size, 20, 20]} />
        <meshStandardMaterial map={planetMap} color={color} />
        <Html distanceFactor={13.5} zIndexRange={[5, 0]} >
          <div className="annotation" style={{ transform: `translate3d(-50%, -${(size * 30.6) + 175}%, 0)` }} >{name}</div>
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
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={1} />
    </line>
  );
}
