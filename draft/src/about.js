// Softkeys

const softkeyCallback = {
  
    left: function() {
      window.location.href = 'index.html';
      console.log('You click on SoftLeft');
      
    },
    
    center: function() {
      window.location.href = 'tel:123456';
      // window.location.href = 'sms:+32494813016?body=Interested';
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
