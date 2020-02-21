$( document ).ready(function() {

  console.log("ready");
  
  function pastCatch (fish, bait, latData, lngData){
    //event handler for catch history to db
    //$("#fishLocationSubmitButton").on("submit", function(event){
      //event.preventDefault();
      console.log("New catch testing");

      var catchData = {
        fish_type: fish,
        bait_type: bait,
        lat: latData,
        lng: lngData,
      };

      //Send the POST for newCatch to db 
      $.ajax("/api/catch", catchData, {
        type: "POST",
        data: catchData
      }).then({
        function() {
          console.log("Created New Catch!");
          location.reload();
        }
      })
    //})
  }

  // //function newRig (event) {
  //   //event handler for catch history to db
  //   $("#rigSubmitButton").on("submit", function(event){
  //     event.preventDefault();
  //     console.log("New rig testing");

  //     var rigData = {
  //       current_rod: $("#rod").val().trim(),
  //       current_bait: $("#bait").val().trim(),
  //       current_lure: $("#lure").val().trim(),
  //     };

  //     //Send the POST for newRig to db 
  //     $.ajax("/api/rig", {
  //       type: "POST",
  //       data: rigData
  //     }).then({
  //       function() {
  //         console.log("Created New Rig!");
  //         location.reload();
  //       }
  //     })
  //   })
  //}
});

// function pastCatch (fish, bait, latData, lngData){
//   //event handler for catch history to db
//   $("#fishLocationSubmitButton").on("submit", function(event){
//     event.preventDefault();
//     console.log("New catch testing");

//     var catchData = {
//       fish_type: fish,
//       bait_type: bait,
//       lat: latData,
//       lng: lngData,
//     };

//     //Send the POST for newCatch to db 
//     $.ajax("/api/catch", catchData, {
//       type: "POST",
//       data: catchData
//     }).then({
//       function() {
//         console.log("Created New Catch!");
//         location.reload();
//       }
//     })
//   })
// }