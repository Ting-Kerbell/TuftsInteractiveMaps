      var map;

   
      function initMap() {
         var iconBase = 'img/';
        var icons = {
          toilet: {
            size: new google.maps.Size(20, 32),
            url: iconBase + 'toilet.png'
            
          },
          food: {
            size: new google.maps.Size(20, 32),
            url: iconBase + 'food.png'
            
          },
          study: {
            size: new google.maps.Size(20, 32),
            url: iconBase + 'study.png'
            
          },
          parking: {
            size: new google.maps.Size(20, 32),
            url: iconBase + 'car.png'
         
          }
        };
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 42.4075, lng: -71.1190},
          mapTypeId: 'terrain'
        });
         var latLng = new google.maps.LatLng(42.4068,-71.1187)

          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            
            icon: icons["toilet"].url
          });
        $.get("http://lit-everglades-77388.herokuapp.com/database.json?service="+type, function(data) {
          results = data.parse();
        for (var i = 0; i < results.length; i++) {
          var coords = results[i].coordinates;
          //var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var latLng = new google.maps.LatLng(results[i][1],results[i][2])
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icons[type].icon
          });
        }
      }); 
}