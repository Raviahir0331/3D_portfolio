import React, { Suspense, useState } from "react";
import "./pages.css";
import { linkedin,github,twitter} from "../assets/icons";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models";
import Loader from "../Component/Loader";

export const Contact = () => {
    const[currentAnimation ,setcurrentAnimation] = useState("idle");
    const[loading,setloading] = useState(false);
    const handleSubmit= () =>{
        setloading(true)
        setcurrentAnimation("hit");
        setTimeout(()=>{
            setcurrentAnimation("hit")
        },[3000])
      
    }
    const handlechange = () => {
        setcurrentAnimation("walk");
        setTimeout(() => {
            setcurrentAnimation("idle")
        }, [3000]);
    }
    const handleFocus =() =>{
        // e.preventDefalut();
        setcurrentAnimation("idlle");
        setTimeout(()=>{
        setcurrentAnimation("idle");
        },[3000])
        
    }
  return (
    <>
      <div className="container col-md-10">
        <div className="row">
          <div className="col-md-6">
            <h2 className="col-md-7 get_in_touch"> Get In Touch</h2>
            <form action="" className="col-md-10 forms" onSubmit={handleSubmit} >
              <label className="form-label"><b>Name</b></label>
              
              <input type="text" className="form-control col-md-4" 
              onChange={handlechange}
              onFocus={handleFocus}
              placeholder="Ravi"/>
                
                <label htmlFor="" className="form-label"><b>Email </b></label>
              
              <input type="email" className="form-control col-md-4" placeholder="ravi@gmail.com" 
              onChange={handlechange}
              onFocus={handleFocus}
              />
            <label htmlFor="" className="form-label"><b>Your Message</b></label>
            <input type="text" className="form-control col-md-4 message" 
            onChange={handlechange}
            onFocus={handleFocus}  />
            <div className="button2 ">
            <button type="submit"  disabled={loading} className="button-15" 
            onFocus={handlechange}
            > {loading ? handlechange :handlechange}submit</button>
            </div>
            </form>
          </div>
          <div className="col-md-6">
            <Canvas
              camera={{
                position: [1, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000,
              }}
            >
                <directionalLight position={[0,0,1]} intensity={2.5}/>
                <ambientLight intensity={1}/>
                <pointLight position={[5,10,0]} intensity={2}/>
                <spotLight position={[10,10,10]} intensity={2}
                angle={0.15}
                penumbra={1}/>
                <Suspense fallback={<Loader />}>
                <Fox 
                currentAnimation={currentAnimation}
                position={[-0.2,0.2,0.4]}
                rotatio={[12,-0.6,0]}
                scale={[0.7,0.6,0.6]}

                />

                </Suspense>

            </Canvas>
          </div>
        </div>
        <div className="row footer col-md-11 ">
   <hr />

            <div className="col-md-6">
            <span className="rights">© 2023 <b>Ravi Dangar.</b>  All rights reserved.</span>
            </div>
            <div className="col-md-6 icons">
            
            <img src={linkedin} alt="" className="linkdin"/>
            <img src={github} alt="" className="github" />
            <img src={twitter} alt="" className="twiter" />

            </div>
        </div>
      </div>
    </>
  );
};
