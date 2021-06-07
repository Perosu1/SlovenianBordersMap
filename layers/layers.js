var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Obine_1 = new ol.format.GeoJSON();
var features_Obine_1 = format_Obine_1.readFeatures(json_Obine_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obine_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obine_1.addFeatures(features_Obine_1);
var lyr_Obine_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Obine_1, 
                style: style_Obine_1,
                interactive: false,
                title: '<img src="styles/legend/Obine_1.png" /> Občine'
            });
var format_Statistineregije_2 = new ol.format.GeoJSON();
var features_Statistineregije_2 = format_Statistineregije_2.readFeatures(json_Statistineregije_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Statistineregije_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Statistineregije_2.addFeatures(features_Statistineregije_2);
var lyr_Statistineregije_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Statistineregije_2, 
                style: style_Statistineregije_2,
                interactive: true,
                title: '<img src="styles/legend/Statistineregije_2.png" /> Statistične regije'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Obine_1.setVisible(true);lyr_Statistineregije_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Obine_1,lyr_Statistineregije_2];
lyr_Obine_1.set('fieldAliases', {'ENOTA': 'ENOTA', 'OB_MID': 'OB_MID', 'OB_ID': 'OB_ID', 'OB_UIME': 'OB_UIME', 'OB_TIP': 'OB_TIP', 'POV_KM2': 'POV_KM2', 'D_OD': 'D_OD', 'DV_OD': 'DV_OD', 'STATUS': 'STATUS', 'CEN_E': 'CEN_E', 'CEN_N': 'CEN_N', });
lyr_Statistineregije_2.set('fieldAliases', {'ENOTA': 'ENOTA', 'SR_MID': 'SR_MID', 'SR_ID': 'SR_ID', 'SR_UIME': 'Ime regije', 'POV_KM2': 'POV_KM2', 'D_OD': 'D_OD', 'DV_OD': 'DV_OD', 'STATUS': 'STATUS', 'CEN_E': 'CEN_E', 'CEN_N': 'CEN_N', });
lyr_Obine_1.set('fieldImages', {'ENOTA': 'Hidden', 'OB_MID': 'Hidden', 'OB_ID': 'Hidden', 'OB_UIME': 'Hidden', 'OB_TIP': 'Hidden', 'POV_KM2': 'Hidden', 'D_OD': 'Hidden', 'DV_OD': 'Hidden', 'STATUS': 'Hidden', 'CEN_E': 'Hidden', 'CEN_N': 'Hidden', });
lyr_Statistineregije_2.set('fieldImages', {'ENOTA': 'Hidden', 'SR_MID': 'Hidden', 'SR_ID': 'Hidden', 'SR_UIME': 'TextEdit', 'POV_KM2': 'Hidden', 'D_OD': 'Hidden', 'DV_OD': 'Hidden', 'STATUS': 'Hidden', 'CEN_E': 'Hidden', 'CEN_N': 'Hidden', });
lyr_Obine_1.set('fieldLabels', {});
lyr_Statistineregije_2.set('fieldLabels', {'SR_UIME': 'header label', });
lyr_Statistineregije_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});