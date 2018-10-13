      var map;
      function initMap() {
        
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 42.4075, lng: -71.1190},
          mapTypeId: 'terrain'
        });

        window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.length; i++) {
          var coords = results[i].coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      }
}