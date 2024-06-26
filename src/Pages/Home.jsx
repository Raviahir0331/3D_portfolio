import { Canvas } from "@react-three/fiber";
import { Bird, Island, Plane, Sky } from "../models";
import { Suspense,  useState } from "react";
import Homedata from "../Component/Homedata";
import Loader from "../Component/Loader";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
import { useEffect } from "react";
import { useRef } from "react";
import './pages.css'

export const Home = () => {
 
const audioRef = useRef(new Audio(sakura));
audioRef.current.volume = 0.4;
audioRef.current.loop = true;

const [currentStage, setCurrentStage] = useState(1);
const [isRotating, setIsRotating] = useState(false);
const [isPlayingMusic, setIsPlayingMusic] = useState(false);

useEffect(() => {
  if (isPlayingMusic) {
    audioRef.current.play();
  }

  return () => {
    audioRef.current.pause();
  };
}, [isPlayingMusic]);

const adjustBiplaneForScreenSize = () => {
  let screenScale, screenPosition;

  // If screen width is less than 768px, adjust the scale and position
  if (window.innerWidth < 768) {
    screenScale = [3, 3, 3];
    screenPosition = [0, -1.5, 0];
  } else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }

  return [screenScale, screenPosition];
};

const adjustIslandForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9];
    screenPosition = [0, -6.5, -43.4];
  } else {
    screenScale = [1, 1, 1];
    screenPosition = [2, -5.5, -40.4];
  }

  return [screenScale, screenPosition];
};

const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
const [islandScale, islandPosition] = adjustIslandForScreenSize();

return (

  
    
   
<div className="container-fluid islandset " >
<div className='homedata  ' style={{position:'absolute', zIndex:'1'}}>
      {currentStage && <Homedata  currentStage={currentStage} />}
    </div>
    <Canvas
     
      className={`canvasTag ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`
    } 
      camera={{ near: 0.1, far: 1000 }}
      
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          skyColor='#b1e1ff'
          groundColor='#000000'
          intensity={1}
        />

        <Bird />
        <Sky isRotating={isRotating} />
        <Island
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          position={islandPosition}
          rotation={[0.1, 4.7077, 0]}
          scale={islandScale}
        />
        <Plane
          isRotating={isRotating}
          position={biplanePosition}
          rotation={[0, 20.1, 0]}
          scale={biplaneScale}
        />
      </Suspense>
  
    </Canvas>

    
      <img
        src={!isPlayingMusic ? soundoff : soundon}
        alt='jukebox'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
       className="sound"
       style={{position:'absolute', zIndex:'1'}}
      />
   
    </div>
  // </section>
);
}
