import React, { useEffect, useState } from "react";
import axios from "axios";
import Pie from "./Pie";

export default function Data() {
  const [sensorData, setSensorData] = useState(null);
  const fetchData = () => {
    axios
      .get("https://9738-46-99-13-247.ngrok-free.app/api/sensor", {
        headers: {
          Accept: "application/json",
          'ngrok-skip-browser-warning': 'skip-browser-warning'
        },
      })
      .then((response) => {
        console.log(response);
        setSensorData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sensor data:", error);
      });
  };
  

  useEffect(() => {
    fetchData(); // Call initially when the component mounts

    const intervalId = setInterval(fetchData, 5000); // Call every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  if (!sensorData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="flex md:flex-row items-center  md:justify-between flex-col bg-white p-6 rounded-lg shadow-md mt-5">
        <div className="flex flex-col justify-center text-center mt-5">
          <h1 className=" text-3xl">Temperature</h1>
          <Pie
            measure={"°C"}
            percentage={parseFloat(sensorData.temperature)}
            colour="blue"
          />
        </div>
        <div className="flex flex-col justify-center text-center mt-5">
          <h1 className=" text-3xl">Humidity</h1>
          <Pie
            measure={"%"}
            percentage={parseFloat(sensorData.humidity)}
            colour="green"
          />
        </div>
        <div className="flex flex-col justify-center text-center mt-5">
          <h1 className=" text-3xl">Soil</h1>
          <Pie
            measure={"%"}
            percentage={parseFloat(sensorData.soil)}
            colour="Brown"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center mt-5 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl">CO2</h1>
        <br />
        <div className="flex flex-row align-middle gap-2">
          <h1 className=" font-bold text-xl">1</h1>
          <div
            className="h-8 w-full rounded-full text-start pl-2 pt-1 "
            style={{
              background: `linear-gradient(to right,  red ${
                (sensorData.co2 / 5000) * 100
              }%, #CDC8C8  ${(sensorData.co2 / 5000) * 100}%)`,
            }}
          >
            <p className="text-gray-100 font-bold">{sensorData.co2} ppm</p>
          </div>
          <h1 className=" font-bold text-xl">5000</h1>
              
        </div>

      </div>


      <div className="flex flex-col justify-center text-center mt-5 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl">TVOC</h1>
        <br />
        <div className="flex flex-row align-middle gap-2">
          <h1 className=" font-bold text-xl">1</h1>
          <div
            className="h-8 w-full rounded-full text-start pl-2 pt-1 "
            style={{
              background: `linear-gradient(to right,  blue ${
                (sensorData.tvoc / 100) * 100
              }%, #CDC8C8  ${(sensorData.tvoc / 100) * 100}%)`,
            }}
          >
            <p className="text-gray-100 font-bold">{sensorData.tvoc}</p>
          </div>
          <h1 className=" font-bold text-xl">100</h1>
              
        </div>

      </div>
    </div>
  );
}
