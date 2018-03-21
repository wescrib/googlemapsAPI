var map;


var lat = document.getElementById('latcoords');
var lng = document.getElementById('loncoords');


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
    
    updateCurrentLatLng(map.getCenter());
    updateUrlLocation(map.getCenter(), map.getZoom());
    mapEventListeners()

}

function mapEventListeners(){
    //functiuon that tracks the mouse and adjusts displayed lat/lon with mouse
    var mouseMoveChanged = google.maps.event.addListener( map,'mousemove',
     function(event){
        updateCurrentLatLng(event.latLng);
    })

    //popup when the map is ready to be used
    // var listenerIdle = google.maps.event.addListenerOnce(map, 'idle',
    //     function(){
    //         alert("map is ready");
    //     })

    //tracks lat/lon in URL
    var listenerDragEnd=google.maps.event.addListener(map, 'dragend',
        function(){
            updateUrlLocation(map.getCenter(), map.getZoom());
        })

    //changes ZOOM in url
    var listenerZoomChanged = google.maps.event.addListener(map, "zoom_changed",
        function(){
            updateUrlLocation(map.getCenter(), map.getZoom());
        })

    //on right click, map will scale in ONE... dont know why the video is calling it mouse double click, cause youre not double clicking jack.
    var mouseDoubleClick = google.maps.event.addListener(map, 'rightclick',
        function(event){
            var z = map.getZoom() + 1
            if(z < 16 ){
                map.setZoom(z);
            }else{
                map.setZoom(15);
            }
            map.setCenter(event.latLng);
        })
}

function updateCurrentLatLng(latLng){
    lat.innerHTML = latLng.lat();
    lng.innerHTML = latLng.lng();
}

function updateUrlLocation(center, zoom){
    var url = "?lat="+center.lat()+"&lon=" + center.lng() + "&zoom=" + zoom;

    //sets url with center point lat/lon and zoom level
    window.history.pushState({zoom: zoom}, 'map center', url);
}



google.maps.event.addDomListener(window, "load", loadMap());