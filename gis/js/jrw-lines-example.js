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
          strokeColor: "${linecolor}",
          strokeOpacity: 1,
          strokeWidth: 4.5,
          strokeDashstyle: "solid", // "dash",
          strokeLinecap: "square",
          label : "${name}",
          fontColor: "${fontcolor}",
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
          fontColor: "${fontcolor}",
          fontSize: "10px",
          fontFamily: "Courier New, monospace",
          fontWeight: "bold",
          labelOutlineColor: "white",
          labelOutlineWidth: 2
  }});

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

  function feature_railroad_fn(val, geometry) {
    var feature = new OpenLayers.Feature.Vector(geometry, {
      id: val["id"],
      name: val["properties"]["N05_002"], // 線名
      linecolor: (val["properties"]["N05_002"] == "山陽新幹線" ? "#0000FF" : "#000000"),
      fontcolor: (val["properties"]["N05_002"] == "山陽新幹線" ? "#0000FF" : "#FF0000")
    });
    return feature;
  }

  function feature_station_fn(val, geometry) {
    var feature = new OpenLayers.Feature.Vector(geometry, {
      id: val["id"],
      name: val["properties"]["N05_011"], // 駅名
      fontcolor: (val["properties"]["N05_002"] == "山陽新幹線" ? "#0000FF" : "#000000")
    });
    return feature;
  }

  //var url1 = "json/sanyo-shinkansen-lines.geojson";
  //var url2 = "json/sanyo-shinkansen-stations.geojson";
  var url1 = "json/JRW-railroad.geojson";
  var url2 = "json/JRW-stations.geojson";

  var layer = new OpenLayers.Layer.Vector("Line", { styleMap: railroadDrawStyle });
  map.addLayer(layer);
  create_features(url1, feature_railroad_fn, layer);

  var layer = new OpenLayers.Layer.Vector("Station", { styleMap: stationDrawStyle });
  map.addLayer(layer);
  create_features(url2, feature_station_fn, layer);
});
