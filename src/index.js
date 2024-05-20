import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// index.js or App.js
if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('/worker.js')
      .then(function(registration) {
          console.log('Service Worker registered with scope:', registration.scope);
      }).catch(function(error) {
          console.log('Service Worker registration failed:', error);
      });
}
