// Start position for the map (hardcoded here for simplicity)
var lat=34.73368;
var lon=135.500035;
var zoom=12;
  
var map; //complex object of type OpenLayers.Map

//Initialise the 'map' object
$(function() {
  map = new OpenLayers.Map('map', {
    layers: [
      new OpenLayers.Layer.OSM.Mapnik("Mapnik")
    ],
    controls: [
      new OpenLayers.Control.Navigation(),
      new OpenLayers.Control.PanZoomBar(),
      new OpenLayers.Control.LayerSwitcher(),
      new OpenLayers.Control.ScaleLine(),
      new OpenLayers.Control.Attribution()],
    eventListeners: {
      "moveend": mapMoved,
      "zoomend": mapZoomEnd
    },
    maxResolution: 'auto'
  });
  var lonLat = new OpenLayers.LonLat(lon, lat).transform(
    new OpenLayers.Projection("EPSG:4326"),
    map.getProjectionObject()
  );
  map.setCenter(lonLat, zoom);

  // see http://dev.openlayers.org/releases/OpenLayers-2.10/doc/apidocs/files/OpenLayers/Feature/Vector-js.html#OpenLayers.Feature.Vector.style
  var composedDrawStyle = new OpenLayers.StyleMap({
      'default':{
          pointRadius: 6,
          strokeColor: "${strokeColor}",
          strokeOpacity: 1,
          strokeWidth: "${strokeWidth}",
          strokeDashstyle: "solid",
          strokeLinecap: "square",
          fillColor: "#0000ff",
          fillOpacity: 1.0,
          label : "${name}",
          fontColor: "${fontcolor}",
          fontSize: "10px",
          fontFamily: "Courier New, monospace",
          fontWeight: "bold",
          labelOutlineColor: "white",
          labelOutlineWidth: 2},
      'selected':{
          pointRadius: 8,
          strokeColor: "#00FF00"}});

  function create_features(url, create_feature_fn, layer) {
    var geojson_format = new OpenLayers.Format.GeoJSON();
    $.getJSON(url, "",
      function(data, textStatus, jqXHR) {
        $.each(data["features"], function(i, val) {
          var geometry = geojson_format.parseGeometry(val["geometry"]);
          geometry.transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
          );
          layer.addFeatures([create_feature_fn(val, geometry)]);
        });
     });
  }

  function feature_composed_fn(val, geometry) {
    var isShinkansen = (val["properties"]["N05_002"] == "山陽新幹線");
    var isStation = (val["geometry"]["type"] == "Point");
    var nn = (isStation ? val["properties"]["N05_011"] : val["properties"]["N05_002"]);
    var feature = new OpenLayers.Feature.Vector(geometry, {
      id: val["id"],
      name: nn,
      fontcolor: (isShinkansen ? "#0000FF" : "#000000"),
      strokeWidth: (isStation? 2.0 : 4.5),
      strokeColor: (isStation? "#FF0000" : (isShinkansen ? "#0000FF" : "#000000"))
    });
    return feature;
  }

  function mapMoved(event) {
    log(event.type);
  }

  function mapZoomEnd(event) {
    log(event.type + "/" + map.numZoomLevels + "/" + map.getZoom());
    var displayStationLabel = (map.getZoom() > 12);
  }

  function log(msg) {
    document.getElementById("output").innerHTML += msg + "\n";
  }

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
  $.each(urls, function(i, val) {
    var layer = new OpenLayers.Layer.Vector("L" + i, { styleMap: composedDrawStyle });
    map.addLayer(layer);
    create_features(val, feature_composed_fn, layer);
  });
});
