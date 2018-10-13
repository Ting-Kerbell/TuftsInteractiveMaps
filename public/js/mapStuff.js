
var map;
function initMap() {
  var markers = [];
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

    },
    dog: {
      size: new google.maps.Size(20, 32),
      url: iconBase + 'paw.png'
    }
  };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 42.4075, lng: -71.1190},
    mapTypeId: 'terrain'
  });

  var i, param = window.location.href;
  param = param.substring(param.indexOf('service=') + 8, param.indexOf('&'));
  var url =  "http://lit-everglades-77388.herokuapp.com/database.json?service="+ param;
  console.log("param:", param);
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
   request.onreadystatechange = function() {
     if (request.readyState == 4 && request.status == 200) {
       response = request.responseText;
       parsed = JSON.parse(response);
       for (i = 0; i < parsed.length; i++) {
         var latLng = new google.maps.LatLng(parsed[i][1], parsed[i][2])
         var marker = new google.maps.Marker({
           position: latLng,
           map: map,
           icon: icons[param].url,
         });

         // console.log("before", marker.position);

         // markers.push(marker);
         var title = parsed[i][0];
         var notes = parsed[i][4];
         var contentString = "<h4>" + title + "</h4></br>" + "Gender neutral bathroom</br>" + notes;

         marker.string = contentString;
         var infoWindow = new google.maps.InfoWindow({
             content: marker.string
           });
         marker.addListener('click', function(e) {
           marker = this;
           console.log(marker.string);
           infoWindow.setContent(marker.string)
           infoWindow.open(map, this);
         });

         marker.setMap(map);
       }
     } else if (request.readyState == 4 && request.status != 200) {
          console.log("Sorry - we couldn't fetch your information.");
     }




   }
   request.send();

}
