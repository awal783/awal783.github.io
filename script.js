function initMap() {
  var url = new URL("https://goo.gl/maps/3KrsNKwmMWzpmnog6");
  var params = new URLSearchParams(url.search);
  var latitude = parseFloat(params.get("q").split(",")[0]);
  var longitude = parseFloat(params.get("q").split(",")[1]);
  
  var myLatLng = { lat: latitude, lng: longitude };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Lokasi Anda'
  });
}
