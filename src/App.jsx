import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import VideoBg from "../src/video/Mahindra.mp4";
import ArrowRight from "../src/assets/right-arrow.svg";

function App() {
  const videoRef = useRef(null);
  const [videoKey, setVideoKey] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onloadeddata = () => {
        console.log("Video loaded successfully");
        video.play();
      };

      video.onerror = (e) => {
        console.error("Error loading video:", e);
        setVideoKey((prevKey) => prevKey + 1);
      };
    }
  }, [videoKey]);
  return (
    <>
      <div className="w-full absolute inset-0">
        <div className="absolute top-96 left-48 text-white motion-translate-x-in-[0%] motion-translate-y-in-[90%] motion-blur-in-[20px] motion-duration-[0.99s]/blur">
          <h1 className="text-8xl font-serif2">Mahindra</h1>
          <h2 className="text-5xl font-serif">BE-6</h2>
        </div>
        <div className="absolute text-white left-3/4 top-3/4 z-20">
          <button className="group bg-white text-black font-serif text-2xl px-6 py-3 rounded-lg flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110 hover:motion-preset-wobble motion-duration-2000 ">
            <NavLink to="/discover">Discover More</NavLink>
            <img src={ArrowRight} alt=""/>
          </button>
        </div>
        <video
          key={videoKey}
          ref={videoRef}
          autoPlay
          loop
          playsInline
          preload="auto"
          muted
          className="w-full h-screen object-cover"
        >
          <source src={VideoBg} />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default App;
