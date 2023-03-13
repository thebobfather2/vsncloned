/*--------------------------------------------------
Google Map
----------------------------------------------------*/
(function(){
  "use strict";
    
$("#map-canvas").each(function() {

window.onload = function () {

var styles = [
    {
      stylers: [
        { hue: "#eec55b" },
        { saturation: -100 },
        { gamma: 0.9 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "on" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Gray Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng = new google.maps.LatLng(40.7571378, -73.9709636); //coordinates--------------------------------------------------------
  var mapOptions = {
    zoom: 13,
    center: myLatlng,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');


  var markerimage = 'images/mapsmarker.png';
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: markerimage,
    title:"UROK" //title--------------------------------------------------------
  });

}

});

})();
// (function() ends