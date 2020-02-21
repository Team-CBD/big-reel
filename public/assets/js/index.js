$( document ).ready(function() {
  
  function pastCatch (event){
    //event handler for catch history to db
    $("#fishLocationSubmitButton").on("submit", function(event){
      event.preventDefault();
      console.log("New catch testing");

      var catchData = {
        fish_type: $("#fishType").val().trim(),
        bait_type: $("baitType").val().trim(),
        lat: google.maps.Marker.lat,
        lng: google.maps.Marker.lng,
      };

      //Send the POST for newCatch to db 
      $.ajax("/api/catch", {
        type: "POST",
        data: newCatch
      }).then({
        function() {
          console.log("Created New Catch!");
          location.reload();
        }
      })
    })
  }

  function newRig (event) {
    //event handler for catch history to db
    $("#rigSubmitButton").on("submit", function(event){
      event.preventDefault();
      console.log("New rig testing");

      var rigData = {
        current_rod: $("#rod").val().trim(),
        current_bait: $("#bait").val().trim(),
        current_lure: $("#bait").val().trim(),
      };

      //Send the POST for newRig to db 
      $.ajax("/api/rig", {
        type: "POST",
        data: newRig
      }).then({
        function() {
          console.log("Created New Rig!");
          location.reload();
        }
      })
    })
  }
})