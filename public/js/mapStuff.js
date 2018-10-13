      var map;

    var iconBase = 'img/';
        var icons = {
          toilot: {
            icon: iconBase + 'toilet.png'
          },
          food: {
            icon: iconBase + 'food.png'
          },
        };
      function initMap(type, person) {
        
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 42.4075, lng: -71.1190},
          mapTypeId: 'terrain'
        });

        $.get("tim.com/?service="+type+"&user="+person, function(data) {
          results = data.parse();
        for (var i = 0; i < results.length; i++) {
          var coords = results[i].coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icons[type].icon
          });
        }
      });
}