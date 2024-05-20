self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
  });
  
  self.addEventListener('message', function(event) {
    const data = event.data;
    const options = {
      body: data.body,
      icon: '827704.png', // optional icon
    };
    self.registration.showNotification(data.title, options);
  });
  