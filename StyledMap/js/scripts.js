/*
* https://snazzymaps.com FOR MAP STYLES
*/

var map;
function loadMap(){
    //MAP STYLES
    var mapStyle =[
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": "50"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "30"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "40"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffff00"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -97
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        }
    ]
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

        styles: mapStyle
    };


    map = new google.maps.Map(document.getElementById("map"),mapOptions);
}
google.maps.event.addDomListener(window, "load", loadMap());