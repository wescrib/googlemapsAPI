var infoWindow;
var map;


var fun = "this is a test";

function loadMap(){
    var mapOptions = {
        center: new google.maps.LatLng(38.39404819, -77.38743867),
        zoom: 7,
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
    // addMarker()


    for(var i=0; i<airportData.length; i++){
        var airport = airportData[i];

        //avg %
        airport.totalper = (airport.aper + airport.dper)/2;

        //total flights
        airport.totalflights = (airport.aop + airport.dop);
        console.log(airport.totalflights);

        //set icon size
        if(airport.totalflights > 10000){
            airport.iconsize = new google.maps.Size(48,48);
        }else if((airport.totalflights >= 1000)&&(airport.totalflights <=10000)){
            airport.iconsize = new google.maps.Size(32,32);
        }else if(airport.totalflights<1000){
            airport.iconsize = new google.maps.Size(16,16);
        }
        //set icon color
        if(airport.totalper >= 95){
            airport.icon='green';
        }else if ((airport.totalper >= 80)&& (airport.totalper < 95)){
            airport.icon='yellow'
        }else if ((airport.totalper >= 70)&& (airport.totalper < 80)){
            airport.icon='orange'
        }else{
            airport.icon='red'
        }


        //marker creation
        var newMarker = this.addMarker(airport);

        newMarker.airport = airport;

        //builds pop window displaying info
        addInfoWindow(newMarker)
    }
}

function addMarker(airport){

    //create the marker
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(airport.lat, airport.lng),
        // map: map,

        icon: {
            url: './img/airplane-'+ airport.icon+'.png',
            // size: new google.maps.Size(32,32),
            // origin: new google.maps.Point(0,0),
            // anchor: new google.maps.Point(16,32),
            scaledSize: airport.iconsize,
            

        },

        visibility: true,

        //CREATES HOVER TAG
        title: airport.airport,

        //SETS THE ZINDEX IF MULTIPLE MARKER TYPES ARE BEING DISPLAYED
        zindex: 1

    })

    marker.setMap(map);

    // var listenerZoomChanged = google.maps.event.addListener(map, "zoom_changed",
    // function(){
    //     console.log(map.getZoom());
    //     if(map.getZoom() < 18){
    //         marker.setVisible(false);
    //         // listenerZoomChanged;
    //     }else{
    //         marker.setVisible(true);
    //     }
    // })


    return marker;
}

function addInfoWindow(marker){

    infoWindow = new google.maps.InfoWindow();

    var details = marker.airport;

    var content = '<div class="infowindowcontent">'+
    '<div class="row">' +
    '<p class="total '+details.icon+'bk">'+Math.round(details.totalper*10)/10+'%</p>'+
    '<p class="location">'+details.airport.split("(")[0].substring(0,19)+'</p>'+
    '<p class="code">'+details.code+'</p>'+
    '</div>'+
    '<div class="data">'+
    '<p class="tagbelow">Avg On-Time</p>'+
    '<p class="label">Arrivals</p>'+
    '<p class="details">'+details.aper+'% ('+numberWithCommas(details.aop)+')</p>' +
    '<p class="label">Departures</p>'+
    '<p class="details">'+details.dper+'% ('+numberWithCommas(details.dop)+')</p>' +        
    '<p class="coords">'+details.lat+' , '+details.lng+'</p>' +
    '</div>'+
    '</div>';

    google.maps.event.addListener(marker, 'click', function() {

        console.log("ITS FUN HERE",fun);
        
        //Close any open infowindows
        infoWindow.close();
        
        //Set the new content
        infoWindow.setContent(content);
        
        //Open the infowindow
        infoWindow.open(map,marker);
        
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

google.maps.event.addDomListener(window, "load", loadMap());