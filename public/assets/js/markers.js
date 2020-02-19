  var map, infoWindow;
      map = new google.maps.Map(document.getElementById("googleMap"), {
        center: {
          lat: "",
          lng: ""
        },
        zoom: 15
      });
      infoWindow = new google.maps.InfoWindow;
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
              map.setCenter(pos);
        }, function () {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
  
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
  
   // Handle Submit Function for creating Google Maps Markers on current location
      function fishDataSubmit() {
        console.log('fishlocationbutton triggered!');
  
        navigator.geolocation.getCurrentPosition(function (position) {
          // get CURRENT location
          var currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          // Get information for the form and add a popup tip window
          // Use jquery to grab the form element and get the data
          var fishType = $("#fishType").val();
          var baitType = $("#baitType").val();
  
          // create a new google Maps marker
          var newMarker = new google.maps.Marker({
            position: currentPosition,
            map: map,
          }).addListener('click', function () {
            map.setCenter(this.getPosition())
            infoWindow.setPosition(this.getPosition());
            infoWindow.setContent(`{USER_HERE} has caught: ${fishType} using bait: ${baitType}!`);
            infoWindow.open(map, this);
          })
  
          // add our new marker to the marker array
       
          fishingMarkers.push(newMarker);
        })
  
      }
  

  

