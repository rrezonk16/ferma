import React, { useState } from "react";
import "./thermo.css";

const Temperature = () => {
  const [temperature, setTemperature] = useState(20); // Initial temperature value

  const handleInputChange = (e) => {
    const newTemperature = parseInt(e.target.value);
    setTemperature(newTemperature);
  };

  return (
    <div>
      <input
        type="range"
        id="ipval"
        min="0"
        max="100"
        value={temperature}
        onChange={handleInputChange}
      />
      <div className="thermometer">
        <div className="stem">
          <div className="stem-perct" style={{ height: `${temperature}%` }}></div>
        </div>
        <div className="bulb"></div>
      </div>
    </div>
  );
};

export default Temperature;
