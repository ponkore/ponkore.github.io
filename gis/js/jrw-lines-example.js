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
    var isShinkansen = val["properties"]["N05_002"] == "山陽新幹線";
    var feature = new OpenLayers.Feature.Vector(geometry, {
      id: val["id"],
      name: val["properties"]["N05_011"], // 駅名
      fontcolor: (isShinkansen ? "#0000FF" : "#000000")
    });
    return feature;
  }

  function feature_composed_fn(val, geometry) {
    var isShinkansen = val["properties"]["N05_002"] == "山陽新幹線";
    var isStation = val["geometry"]["type"] == "Point";
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

  var urls1 = "json/sanyo-shinkansen-lines.geojson";
  var urls2 = "json/sanyo-shinkansen-stations.geojson";
  var url1 = "json/JRW-other-lines.geojson";
  var url2 = "json/JRW-other-stations.geojson";
  var url3 = [
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
      "json/JRW-026-sanyosen.geojson"
      ];

  var layer1 = new OpenLayers.Layer.Vector("Line", { styleMap: railroadDrawStyle });
  map.addLayer(layer1);
  create_features(url1, feature_railroad_fn, layer1);
  create_features(url2, feature_station_fn, layer1);

  var layer2 = new OpenLayers.Layer.Vector("Station", { styleMap: stationDrawStyle });
  map.addLayer(layer2);
  create_features(urls1, feature_railroad_fn, layer2);
  create_features(urls2, feature_station_fn, layer2);

  $.each(url3, function(i, val) {
    var layer3 = new OpenLayers.Layer.Vector("L" + i, { styleMap: composedDrawStyle });
    map.addLayer(layer3);
    create_features(val, feature_composed_fn, layer3);
  });
});
