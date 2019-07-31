const titel = document.querySelector('#text');
const geo = document.querySelector('#geo');

const softkeyCallback = {
  
    left: function() {
      titel.textContent = 'Je hebt op LINKS gedrukt';
      console.log('You click on SoftLeft');
      
    },
    
    center: function() {
      titel.textContent = 'Je hebt op ENTER gedrukt';
      
      getLocation();

      function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        geo.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      geo.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    }
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
