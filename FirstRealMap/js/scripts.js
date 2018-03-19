var map;
function loadMap(){
    var mapOptions = {
        center: new google.maps.LatLng(38.39404819, -77.38743867),
        zoom: 18,
        //DEFAULT MAPP THAT OPENS
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        minZoom: 5,
        maxZoom: 15,

        //OPENS OPTIONS FOR USER TO SELECT MAP TYPE
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [
                google.maps.MapTypeId.SATELLITE,
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.HYBRID,
                google.maps.MapTypeId.TERRAIN
            ],
            // position: google.maps.ControlPosition.TOP_LEFT
            // position: google.maps.ControlPosition.TOP_CENTER
            // position: google.maps.ControlPosition.TOP_RIGHT
            // position: google.maps.ControlPosition.LEFT_TOP
            // position: google.maps.ControlPosition.RIGHT_TOP
            // position: google.maps.ControlPosition.LEFT_CENTER
            // position: google.maps.ControlPosition.RIGHT_CENTER
            // position: google.maps.ControlPosition.LEFT_BOTTOM
            // position: google.maps.ControlPosition.RIGHT_BOTTOM
            // position: google.maps.ControlPosition.BOTTOM_LEFT
            // position: google.maps.ControlPosition.BOTTOM_CENTER
            // position: google.maps.ControlPosition.BOTTOM_RIGHT
        
        },
        zoomControl: false,
        // tilt: 45
    };
    map = new google.maps.Map(document.getElementById("map"),mapOptions);
}
google.maps.event.addDomListener(window, "load", loadMap());