const accur = document.querySelector('#accur');
// var url = window.location.href;
// var indexOfParameters = url.lastIndexOf("?");
// var parameters = url.substring(indexOfParameters + 1);
// var indexOfLat = parameters.indexOf("lat=");
// var lat = parameters.substring(indexOfLat + 4);

// Get lat, lng, acc from local storage
const lat = localStorage.getItem("latitude");
const lng = localStorage.getItem("longitude");
const acc = localStorage.getItem("accuracy");

accur.innerHTML = `(accuracy: ${acc} meters.)`;
console.log(`accuracy: ${acc} meters.`);

// Leaflet
var map = L.map('map').setView([lat, lng], 16);
map.removeControl(map.zoomControl); // remove zoom control


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

L.marker([lat, lng]).addTo(map);
    // .bindPopup()
    // .openPopup();

// Softkeys

const softkeyCallback = {
  
  left: function() {
    console.log('You click on SoftLeft');  
  },
  
  center: function() {
    window.location.href = 'index.html';
    console.log('You click on Enter');
  },
  
  right: function() {
    
    console.log('You click on SoftRight');
  }
};


function handleKeyDown(evt) {
  switch (evt.key) {
      case 'SoftLeft':
          // Action case press left key
          softkeyCallback.left();
      break;

      case 'SoftRight':
          // Action case press right key
          softkeyCallback.right();
      break;

      case 'Enter':
          // Action case press center key
          softkeyCallback.center();
      break;
  }
};

document.addEventListener('keydown', handleKeyDown);
