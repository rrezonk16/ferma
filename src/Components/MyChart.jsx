import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';

export default function DynamicLineChart() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch temperature data from the API
    axios
    .get("https://9738-46-99-13-247.ngrok-free.app/api/sensor/temperature", {
      headers: {
        Accept: "application/json",
        'ngrok-skip-browser-warning': 'skip-browser-warning',
      },
    })
      .then(response => {
        const data = response.data;
        if (Array.isArray(data)) {
          setTemperatureData(data);
        } else {
          throw new Error('Invalid data format');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching temperature data:', error);
        setError('Error fetching temperature data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='container'>
      <div className="max-w-screen-xl flex-wrap items-center justify-between mx-auto flex flex-col mt-10 bg-white p-6 rounded-lg shadow-md">
        <p>Weekly</p>
        <LineChart
          xAxis={[{ scaleType: 'band', data: temperatureData.map(item => item.date).reverse() }]}
          series={[{ data: temperatureData.map(item => item.temperature).reverse() }]}
          height={350}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </div>
    </div>
  );
}
