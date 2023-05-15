
$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  var controller2 = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0.9, // show, when scrolled 10% into view
  duration: "125%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
.setClassToggle(".reveal1", "visible") // add class to reveal
.addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  triggerHook: 0.9, // show, when scrolled 10% into view
  duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 50 // move trigger to center of element
})
.setClassToggle(".reveal2", "visible") // add class to reveal
.addTo(controller);
 
});



