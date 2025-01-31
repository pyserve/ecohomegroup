import React, { useEffect, useState } from "react";
import "./App.css";

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
      <video className="video-background" src="/12958982_3840_2160_30fps.mp4" autoPlay muted loop />

      <div className="content">
        <nav className="navbar">
          <img src="/ecohomegroup.png" className="logo" />
        </nav>

        <div>
          <h1>Welcome to Eco Home Group</h1>
          <p>
            Eco Home Group is a dedicated management company that supports multiple HVAC service providers in their operations and installations. With over 15 years of experience in the industry, we ensure seamless coordination and high-quality service for our partnered companies.
          </p>

          Important Notice
          Eco Home Group is not a sales or marketing company. We do not engage in direct customer agreements, promotions, or sales activities. Any agreements, pricing, or service commitments are made directly between customers and the individual service providers they have chosen.

          If you have any questions regarding your contract, billing, or service terms, please contact the company with which you signed your agreement.

          Thank you for visiting Eco Home Group.
        </div>


        {/* <footer>
          Copyright &copy; 2025 Eco Home Group. All rights reserved.
        </footer> */}

      </div>

    </div>
  );
};

export default App;
