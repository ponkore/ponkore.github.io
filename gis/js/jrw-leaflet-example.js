// Start position for the map (hardcoded here for simplicity)
var lat=34.73368;
var lon=135.500035;
var zoom=12;

var api_key = "8ad1f0c97b1a41b5950f916a974cbb96";
var map; //complex object of type OpenLayers.Map

function hoge(map, feature) {
  L.geoJson(feature).addTo(map);
/*
  L.geoJSON(feature, {
     style: function (feature) {
       return {color:"#ff7800"}; // {color: feature.properties.color};
     }
  }).addTo(map)
*/
}

//Initialise the 'map' object
$(function() {
  map = L.map("map").setView([lat, lon], zoom); // 997
  L.tileLayer("http://{s}.tile.cloudmade.com/" + api_key + "/" + "997" + "/256/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map);

  var urls = [
      "json/JRW-000-sanyoshinkansen.geojson",
      "json/JRW-001-hokurikusen.geojson",
      "json/JRW-002-etsumihokusen.geojson",
      "json/JRW-003-nanaosen.geojson",
      "json/JRW-004-johanasen.geojson",
      "json/JRW-005-himisen.geojson",
      "json/JRW-006-takayamasen.geojson",
      "json/JRW-007-ooitosen.geojson",
      "json/JRW-008-kansaisen.geojson",
      "json/JRW-009-kusatsusen.geojson",
      "json/JRW-010-narasen.geojson",
      "json/JRW-011-sakuraisen.geojson",
      "json/JRW-012-wakayamasen.geojson",
      "json/JRW-013-hanwasen.geojson",
      "json/JRW-014-kiseisen.geojson",
      "json/JRW-015-tokaidosen.geojson",
      "json/JRW-016-koseisen.geojson",
      "json/JRW-017-fukuchiyamasen.geojson",
      "json/JRW-018-obamasen.geojson",
      "json/JRW-019-kakogawasen.geojson",
      "json/JRW-020-bantansen.geojson",
      "json/JRW-021-maizurusen.geojson",
      "json/JRW-022-kanjosen.geojson",
      "json/JRW-023-katamachisen.geojson",
      "json/JRW-024-tozaisen.geojson",
      "json/JRW-025-oosakahigashisen.geojson",
      "json/JRW-026-sanyosen.geojson",
      "json/JRW-027-kishinsen.geojson",
      "json/JRW-028-akosen.geojson",
      "json/JRW-029-tsuyamasen.geojson",
      "json/JRW-030-kibisen.geojson",
      "json/JRW-031-unosen.geojson",
      "json/JRW-032-honshibisansen.geojson",
      "json/JRW-033-hakubisen.geojson",
      "json/JRW-034-geibisen.geojson",
      "json/JRW-035-fukushiosen.geojson",
      "json/JRW-036-kuresen.geojson",
      "json/JRW-037-kabesen.geojson",
      "json/JRW-038-iwatokusen.geojson",
      "json/JRW-039-yamaguchisen.geojson",
      "json/JRW-040-ubesen.geojson",
      "json/JRW-041-onodasen.geojson",
      "json/JRW-042-miyasen.geojson",
      "json/JRW-043-sanninsen.geojson",
      "json/JRW-044-inbisen.geojson",
      "json/JRW-045-sakaisen.geojson",
      "json/JRW-046-kisugisen.geojson",
      "json/JRW-047-sankosen.geojson",
      "json/JRW-048-hakataminamisen.geojson"
      ];
  $.each(urls, function(i, url) {
    $.getJSON(url, "",
      function(feature_collection, textStatus, jqXHR) {
        $.each(feature_collection["features"], function(j, feature) {
          hoge(map, feature)
        })
      })
    })
});
