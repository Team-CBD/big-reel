$(document).ready(function () {
  console.log("ready");
  var map, infoWindow;
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 12
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
  };

  $(document).on("click", "#fishLocationSubmitButton", fishDataSubmit);

  function fishDataSubmit(event) {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(function (position) {
      // get CURRENT location
      var currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // Get information for the form and add a popup tip window
      // Use jquery to grab the form element and get the data
      var fishType = "PLACEHOLDER";
      //var fishType = `$("#fishType").val()`;

      console.log(fishType);


      // icon link 
      var image = "http://maps.google.com/mapfiles/kml/shapes/fishing.png";

      // create a new google Maps marker
      var newMarker = new google.maps.Marker({
        position: currentPosition,
        map: map,
        icon: image,
      }).addListener('click', function () {
        map.setCenter(this.getPosition())
        infoWindow.setPosition(this.getPosition());
        infoWindow.setContent(`{USER_HERE} has caught: ${fishType}!`);
        infoWindow.open(map, this);


      });

      /// Need help with POST problem is probably in the api-routes //////////
      var catchData = {

        fish_type: "BASS",
        lat: parseFloat(position.coords.latitude),
        lng: parseFloat(position.coords.longitude)

      };

      //Send the POST for newCatch to db 
      $.ajax({
        type: "POST",
        url: "/api/CatchHistory",
        data: catchData
      }).then({
        function() {
          console.log("New POSTed Catch!");
          location.reload();
        }

      })

    })


  }
})