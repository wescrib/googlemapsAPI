var map;
function loadMap(){
    var mapOptions = {
        center: new google.maps.LatLng(28.39404819, -91.38743867),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById("map"),mapOptions);
}
google.maps.event.addDomListener(window, "load", loadMap());