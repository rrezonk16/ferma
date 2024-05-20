import React from 'react'
import Navbar from './Navbar'
import Data from './Data'
import BasicLineChart from './MyChart'
import HourlyChart from './HourlyChart'
import ValueMonitor from './ValueMonitor'

const Main = () => {
  function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            } else {
                console.log('Notification permission denied.');
            }
        });
    }
}

// Call this function when appropriate, e.g., on app load or user action
requestNotificationPermission();




  return (
    <div><Navbar/>
    <Data/>
    <BasicLineChart/>
    <HourlyChart/>
    <ValueMonitor/>
    </div>
  )
}

export default Main