function initialize(){
    var mapProp = {
        center:new google.maps.LatLng(19.4305246,-99.1865861),
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

google.maps.event.addDomListner(window,'load',initialize);

function loadScript(){
    var script = document.createElement("script");
    script.src = "http://maps.googleapis.com/maps/api/js?callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;