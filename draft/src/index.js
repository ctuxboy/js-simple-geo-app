const geo = document.querySelector('#geo');
const spinner = document.querySelector('.spinner');

// Geolocation
var options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 1000
};

function success(pos) {

  spinner.classList.add("is-hidden");
  const crd = pos.coords;

localStorage.setItem("latitude", crd.latitude);
localStorage.setItem("longitude", crd.longitude);
localStorage.setItem("accuracy", Math.round(crd.accuracy));

  console.log('Your current position is: (not rounded!)');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);

  function round(value, decimals) { // round decimals ex. round(1.005, 2); // 1.01
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
   }

  const lat = round(crd.latitude, 6);
  const lng = round(crd.longitude, 6);
  const acc = Math.round(crd.accuracy);
  
  geo.innerHTML = "Lat: " + lat +
"<br>Lng: " + lng + "<br>Acc: " + acc + "meters";
}

function error(err) {
  spinner.classList.add("is-hidden");
  console.warn(`ERROR(${err.code}): ${err.message}`);
  geo.innerHTML = err.message;
}


navigator.geolocation.getCurrentPosition(success, error, options);
	
// Softkeys

const softkeyCallback = {
  
    left: function() {
      window.location.href = 'location.html';
      console.log('You click on SoftLeft');
      
    },
    
    center: function() {
      console.log('You click on Enter');
    },
    
    right: function() {
      window.location.href = 'about.html';
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

// D-Pad

document.activeElement.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {
  switch(e.key) {
    case 'ArrowUp':
      nav(-1);
      break;
    case 'ArrowDown':
      nav(1);
      break;
    case 'ArrowRight':
      nav(1);
      break;
    case 'ArrowLeft':
      nav(-1);
      break;
  }
}

function nav (move) {
  const currentIndex = document.activeElement.tabIndex;
  const next = currentIndex + move;
  const items = document.querySelectorAll('.items');
  const targetElement = items[next];
  targetElement.focus();
}
