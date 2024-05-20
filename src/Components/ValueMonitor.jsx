import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

const ValueMonitor = () => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const notificationSentRef = useRef(false);

  const fetchData = () => {
    axios
    .get('https://9738-46-99-13-247.ngrok-free.app/api/sensor', {
      headers: {
        Accept: 'application/json',
        'ngrok-skip-browser-warning': 'skip-browser-warning',
      },
    })
      .then((response) => {
        setSensorData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching sensor data:', error);
        setLoading(false); // Set loading to false even if there is an error
      });
  };

  useEffect(() => {
    fetchData(); // Call initially when the component mounts

    const intervalId = setInterval(fetchData, 5000); // Call every 5 seconds

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  useEffect(() => {
    const registerServiceWorker = async () => {
      try {
        // Request notification permission
        if (Notification.permission !== 'granted') {
          const permission = await Notification.requestPermission();
          if (permission !== 'granted') {
            console.log('Notification permission denied');
            return;
          }
        }

        // Register the service worker if not already registered
        if ('serviceWorker' in navigator) {
          const registration = await navigator.serviceWorker.register('/service-worker.js');
          console.log('Service Worker registered with scope:', registration.scope);

          // Ensure service worker is ready
          await navigator.serviceWorker.ready;
        }
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    };

    registerServiceWorker();
  }, []);

  useEffect(() => {
    if (!loading && sensorData && sensorData.soil < 70) {
      const sendNotification = async () => {
        if (!notificationSentRef.current) {
          notificationSentRef.current = true; // Ensure notification is sent only once
          if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            if (Notification.permission === 'granted' && registration.active) {
              registration.active.postMessage({
                title: 'Plant needs water',
                body: 'The soil moisture level is below 70.',
              });
            }
          }
        }
      };

      sendNotification();
    }
  }, [loading, sensorData]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>.</p>
      )}
    </div>
  );
};

export default ValueMonitor;
