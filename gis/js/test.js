$(function () {
    var options = {
	maxResolution:1.40625/2,
	controls: [
	    new OpenLayers.Control.PanZoomBar(),
	    new OpenLayers.Control.LayerSwitcher(),
	    new OpenLayers.Control.Navigation(),
	    new OpenLayers.Control.Attribution({displayClass: 'prmtcd'})
	],
	numZoomLevels: 18
    };

    var map = new OpenLayers.Map('map',options);
    map.div.style.backgroundColor = 'rgb(221,238,255)';

    var kibanwms = new OpenLayers.Layer.TMS(
	"KIBAN 25000 TMS",
	"http://www.finds.jp/ws/tmc/",
	{
	    layername: "KBN25000ANF-4326",
	    type: "png",
	    attribution: '<a target=\"_blank\" href="http://www.finds.jp/wsdocs/kibanwms/index.html">基盤地図情報(平20業使、第449号)</a>',
	    isBaseLayer: true
	}
    );

    map.addLayer(kibanwms);
    map.setCenter(new OpenLayers.LonLat(133.39, 34.5), 15);
});
