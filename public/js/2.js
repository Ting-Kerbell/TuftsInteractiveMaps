      var map;
      function initMap() {
         var iconBase = 'img/';
        var icons = {
          bathroom: {
            size: new google.maps.Size(20, 32),
            url: iconBase + 'toilet.png'

          },
          food: {
            size: new google.maps.Size(20, 32),
            url: iconBase + 'food.png'

          },
          academic: {
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

        var param = window.location.href;
        param = param.substring(param.indexOf('service=') + 8, param.indexOf('&'));
        var url =  "http://lit-everglades-77388.herokuapp.com/database.json?service="+ param;
        console.log("param:", param);
        if(param!="dog"){
          $("#banner").html("Currently Displaying: "+param);
        }else{
          $("#banner").html("Places to Play!");
        }
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
         request.onreadystatechange = function() {
           if (request.readyState == 4 && request.status == 200) {
             response = request.responseText;
             parsed = JSON.parse(response);
             for (var i = 0; i < parsed.length; i++) {
               var latLng = new google.maps.LatLng(parsed[i][1], parsed[i][2])
               var marker = new google.maps.Marker({
                 position: latLng,
                 map: map,
                 icon: icons[param].url
               });
             }
           }
         }
         request.send();

}