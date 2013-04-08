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
      new OpenLayers.Control.Attribution()],
    maxResolution: 'auto'
  });
  var lonLat = new OpenLayers.LonLat(lon, lat).transform(
    new OpenLayers.Projection("EPSG:4326"),
    map.getProjectionObject()
  );
  map.setCenter(lonLat, zoom);

  // see http://dev.openlayers.org/releases/OpenLayers-2.10/doc/apidocs/files/OpenLayers/Feature/Vector-js.html#OpenLayers.Feature.Vector.style
  var railroadDrawStyle = new OpenLayers.StyleMap({
      'default':{
          strokeColor: "#000000",
          strokeOpacity: 1,
          strokeWidth: 4.5,
          strokeDashstyle: "solid", // "dash",
          strokeLinecap: "square",
          label : "${name}",
          fontColor: "red",
          fontSize: "12px",
          fontFamily: "Courier New, monospace",
          fontWeight: "bold",
          labelOutlineColor: "white",
          labelOutlineWidth: 3
  }});
  var stationDrawStyle = new OpenLayers.StyleMap({
      'default':{
          pointRadius: 6,
          strokeColor: "#FF0000",
          strokeOpacity: 1,
          strokeWidth: 2.0,
          strokeDashstyle: "solid",
          strokeLinecap: "square",
          fillColor: "#0000ff",
          fillOpacity: 1.0,
          label : "${name}",
          fontColor: "black",
          fontSize: "10px",
          fontFamily: "Courier New, monospace",
          fontWeight: "bold",
          labelOutlineColor: "white",
          labelOutlineWidth: 2
  }});

  function create_features(url, layer_name, create_feature_fn, layer_stylemap) {
    var geojson_format = new OpenLayers.Format.GeoJSON();
    $.getJSON(url, "",
      function(data, textStatus, jqXHR) {
        var layer = new OpenLayers.Layer.Vector(layer_name, layer_stylemap);
        $.each(data["features"], function(i, val) {
          var geometry = geojson_format.parseGeometry(val["geometry"]);
          geometry.transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
          );
          layer.addFeatures([create_feature_fn(val, geometry)]);
        });
        map.addLayer(layer);
     });
  }

  function feature_railroad_fn(val, geometry) {
    var feature = new OpenLayers.Feature.Vector(geometry, {
      id: val["id"],
      name: val["properties"]["N05_002"] // 線名
    });
    return feature;
  }

  function feature_station_fn(val, geometry) {
    var feature = new OpenLayers.Feature.Vector(geometry, {
      id: val["id"],
      name: val["properties"]["N05_011"] // 駅名
    });
    return feature;
  }

  //var url1 = "json/sanyo-shinkansen-lines.geojson";
  //var url2 = "json/sanyo-shinkansen-stations.geojson";
  var url1 = "json/JRW-railroad.geojson";
  var url2 = "json/JRW-stations.geojson";

  create_features(url1, "Line", feature_railroad_fn, { styleMap: railroadDrawStyle });
  create_features(url2, "Station", feature_station_fn, { styleMap: stationDrawStyle });
});
