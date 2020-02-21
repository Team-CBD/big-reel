// var postCatch function(){
//   //event handler for catch history to db
//   $("#fishLocationSubmitButton").on("submit", function(event){
//     event.preventDefault();
//     console.log("New catch testing");

//     var newCatch = {
//       fish_type: $("#fishType").val().trim(),
//       bait_type: $("baitType").val().trim(),
//       lat: google.maps.Marker.lat,
//       lng: google.maps.Marker.lng,
//     };

//     //Send the POST for newCatch to db 
//     $.ajax("/api/catch", {
//       type: "POST",
//       data: newCatch
//     }).then({
//       function() {
//         console.log("Created New Catch!");
//         location.reload();
//       }
//     })
//   })
// }