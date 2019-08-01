const titel = document.querySelector('#text');
const geo = document.querySelector('#geo');

const softkeyCallback = {
  
    left: function() {
      titel.textContent = 'Je hebt op LINKS gedrukt';
      console.log('You click on SoftLeft');
      
    },
    
    center: function() {
      titel.textContent = 'Je hebt op ENTER gedrukt';
    
    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      
      geo.innerHTML = "Latitude: " + crd.latitude +
    "<br>Longitude: " + crd.longitude;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      geo.innerHTML = "Geolocation is not supported by this browser.";
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

      console.log('You click on Enter');
    },
    
    right: function() {
      titel.textContent = 'Je hebt op RECHTS gedrukt';
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
