import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";

const App = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="background" style={{ height: screenHeight }}>
        <Card />
      </div>
    </div>
  );
};

export default App;
