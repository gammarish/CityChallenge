// Where all the fun happens 
function Initialize() {


    /////////////////////////////////////////

    ////////////////////////////////////////

    var minZoomLevel = 13;
    // Bounds for England
    //var strictBounds = new google.maps.LatLngBounds(
    //new google.maps.LatLng(50.8093206, 19.1227711),
    //new google.maps.LatLng(55.942528, 19.256416));

    // Google has tweaked their interface somewhat - this tells the api to use that new UI
    google.maps.visualRefresh = true;
    var CenterPoint = new google.maps.LatLng(50.8093206, 19.1227711);

    // These are options that set initial zoom level, where the map is centered globally to start, and the type of map to show
    var mapOptions = {
        zoom: minZoomLevel,
        center: CenterPoint,
        mapTypeId: google.maps.MapTypeId.G_NORMAL_MAP,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
    };

    // This makes the div with id "map_canvas" a google map
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    // This shows adding a simple pin "marker" - this happens to be the Tate Gallery in Liverpool!
    //var myLatlng = new google.maps.LatLng(53.40091, -2.994464);

    //var marker = new google.maps.Marker({
    //    position: myLatlng,
    //    map: map,
    //    title: 'Tate Gallery'
    //});

    // You can make markers different colors...  google it up!
    //marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')

    // a sample list of JSON encoded data of places to visit in Liverpool, UK
    // you can either make up a JSON list server side, or call it from a controller using JSONResult


    //function addMarker(x, y) {
    //    var location = new google.maps.LatLng(x, y);
    //    var marker = new google.maps.Marker({
    //        position: location,
    //        map: map,
    //    });
    //    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')
    //}
    //// Using the JQuery "each" selector to iterate through the JSON list and drop marker pins

    //function addMarker(x, y) {
    //    var location = new google.maps.LatLng(x, y);
    //    var marker = new google.maps.Marker({
    //        position: location,
    //        map: map,
    //    });
    //    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')
    //}

    //// Using the JQuery "each" selector to iterate through the JSON list and drop marker pins
    //$.each(allMarkers, function (i, item) {
    //    var marker = new google.maps.Marker({
    //        'position': new google.maps.LatLng(item.location_lat, item.location_lon),
    //        'map': map,
    //        'title': item.highway_name
    //    });
    // Using the JQuery "each" selector to iterate through the JSON list and drop marker pins
    $.each(allMarkers, function (i, item) {
        var marker = new google.maps.Marker({
            'position': new google.maps.LatLng(item.location_lat, item.location_lon),
            'map': map,
            'title': item.PlaceName
        });

        // Make the marker-pin blue!
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')

        if (item.accident) {
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/caution.png')
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }


        // finally hook up an "OnClick" listener to the map so it pops up out info-window when the marker-pin is clicked!
        google.maps.event.addListener(marker, 'click', function () {
            //infowindow.open(map, marker);
            homeObj.addNewChartForSelectedBillboard(item);
        });

        //// Listen for the dragend event
        //google.maps.event.addListener(map, 'dragend', function () {
        //    if (strictBounds.contains(map.getCenter())) return;

        //    // We're out of bounds - Move the map back within the bounds

        //    var c = map.getCenter(),
        //        x = c.lng(),
        //        y = c.lat(),
        //        maxX = strictBounds.getNorthEast().lng(),
        //        maxY = strictBounds.getNorthEast().lat(),
        //        minX = strictBounds.getSouthWest().lng(),
        //        minY = strictBounds.getSouthWest().lat();

        //    if (x < minX) x = minX;
        //    if (x > maxX) x = maxX;
        //    if (y < minY) y = minY;
        //    if (y > maxY) y = maxY;

        //    map.setCenter(new google.maps.LatLng(y, x));
        //});

        // Limit the zoom level
        google.maps.event.addListener(map, 'zoom_changed', function () {
            if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
        });


    });

}
