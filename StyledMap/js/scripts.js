/*
* https://snazzymaps.com FOR MAP STYLES
*/

var map;
function loadMap(){
    //MAP STYLES
    var mapStyle =[
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 13
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#144b53"
                },
                {
                    "lightness": 14
                },
                {
                    "weight": 1.4
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#08304b"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#0c4152"
                },
                {
                    "lightness": 5
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b434f"
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b3d51"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#146474"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#021019"
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