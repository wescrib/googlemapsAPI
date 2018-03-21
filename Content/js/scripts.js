var map;
function loadMap(){
    var mapOptions = {
        center: new google.maps.LatLng(38.39404819, -77.38743867),
        zoom: 18,
        //DEFAULT MAPP THAT OPENS
        mapTypeId: google.maps.MapTypeId.ROADMAP,
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

        
        },
        zoomControl: false,
        // tilt: 45
    };

    
    map = new google.maps.Map(document.getElementById("map"),mapOptions);
    addMarker()
}

function addMarker(){

    //create the marker
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(38.39404819, -77.38743867),
        // map: map,

        icon: {
            url: 'https://png.icons8.com/metro/1600/car.png',
            // size: new google.maps.Size(32,32),
            // origin: new google.maps.Point(0,0),
            // anchor: new google.maps.Point(16,32),
            scaledSize: new google.maps.Size(32,32)

        }

    })

    marker.setMap(map);

    var listenerZoomChanged = google.maps.event.addListener(map, "zoom_changed",
    function(){
        console.log(map.getZoom());
        if(map.getZoom() < 14){
            marker.setVisible(false);
            // listenerZoomChanged;
        }else{
            marker.setVisible(true);
        }
    })


    return marker;
}

google.maps.event.addDomListener(window, "load", loadMap());