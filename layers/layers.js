var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_points_ecoute_1 = new ol.format.GeoJSON();
var features_points_ecoute_1 = format_points_ecoute_1.readFeatures(json_points_ecoute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_ecoute_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_ecoute_1.addFeatures(features_points_ecoute_1);
var lyr_points_ecoute_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_ecoute_1, 
                style: style_points_ecoute_1,
                interactive: true,
                title: '<img src="styles/legend/points_ecoute_1.png" /> points_ecoute'
            });
var format_points_2 = new ol.format.GeoJSON();
var features_points_2 = format_points_2.readFeatures(json_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_2.addFeatures(features_points_2);
var lyr_points_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_2, 
                style: style_points_2,
                interactive: true,
                title: '<img src="styles/legend/points_2.png" /> points'
            });
var format_nom_oiseaux_camoingon_3 = new ol.format.GeoJSON();
var features_nom_oiseaux_camoingon_3 = format_nom_oiseaux_camoingon_3.readFeatures(json_nom_oiseaux_camoingon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nom_oiseaux_camoingon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nom_oiseaux_camoingon_3.addFeatures(features_nom_oiseaux_camoingon_3);
var lyr_nom_oiseaux_camoingon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nom_oiseaux_camoingon_3, 
                style: style_nom_oiseaux_camoingon_3,
                interactive: true,
                title: '<img src="styles/legend/nom_oiseaux_camoingon_3.png" /> nom_oiseaux_camoingon'
            });
var format_nom_oiseaux_goncamoin_4 = new ol.format.GeoJSON();
var features_nom_oiseaux_goncamoin_4 = format_nom_oiseaux_goncamoin_4.readFeatures(json_nom_oiseaux_goncamoin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nom_oiseaux_goncamoin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nom_oiseaux_goncamoin_4.addFeatures(features_nom_oiseaux_goncamoin_4);
var lyr_nom_oiseaux_goncamoin_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nom_oiseaux_goncamoin_4, 
                style: style_nom_oiseaux_goncamoin_4,
                interactive: true,
                title: '<img src="styles/legend/nom_oiseaux_goncamoin_4.png" /> nom_oiseaux_goncamoin'
            });
var format_parcour_5 = new ol.format.GeoJSON();
var features_parcour_5 = format_parcour_5.readFeatures(json_parcour_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcour_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcour_5.addFeatures(features_parcour_5);
var lyr_parcour_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcour_5, 
                style: style_parcour_5,
                interactive: true,
                title: '<img src="styles/legend/parcour_5.png" /> parcour'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_points_ecoute_1.setVisible(true);lyr_points_2.setVisible(true);lyr_nom_oiseaux_camoingon_3.setVisible(true);lyr_nom_oiseaux_goncamoin_4.setVisible(true);lyr_parcour_5.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_points_ecoute_1,lyr_points_2,lyr_nom_oiseaux_camoingon_3,lyr_nom_oiseaux_goncamoin_4,lyr_parcour_5];
lyr_points_ecoute_1.set('fieldAliases', {'Num_point': 'Num_point', });
lyr_points_2.set('fieldAliases', {'Num_point': 'Num_point', });
lyr_nom_oiseaux_camoingon_3.set('fieldAliases', {'Nom oiseau': 'Nom oiseau', 'Nombre': 'Nombre', 'Type conta': 'Type conta', 'Certitude': 'Certitude', });
lyr_nom_oiseaux_goncamoin_4.set('fieldAliases', {'Nom oiseau': 'Nom oiseau', 'Nombre': 'Nombre', 'Type conta': 'Type conta', 'Certitude': 'Certitude', });
lyr_parcour_5.set('fieldAliases', {'id': 'id', });
lyr_points_ecoute_1.set('fieldImages', {'Num_point': '', });
lyr_points_2.set('fieldImages', {'Num_point': 'Range', });
lyr_nom_oiseaux_camoingon_3.set('fieldImages', {'Nom oiseau': '', 'Nombre': '', 'Type conta': '', 'Certitude': '', });
lyr_nom_oiseaux_goncamoin_4.set('fieldImages', {'Nom oiseau': 'TextEdit', 'Nombre': 'Range', 'Type conta': 'TextEdit', 'Certitude': 'Range', });
lyr_parcour_5.set('fieldImages', {'id': '', });
lyr_points_ecoute_1.set('fieldLabels', {'Num_point': 'no label', });
lyr_points_2.set('fieldLabels', {'Num_point': 'no label', });
lyr_nom_oiseaux_camoingon_3.set('fieldLabels', {'Nom oiseau': 'no label', 'Nombre': 'no label', 'Type conta': 'no label', 'Certitude': 'no label', });
lyr_nom_oiseaux_goncamoin_4.set('fieldLabels', {'Nom oiseau': 'inline label', 'Nombre': 'inline label', 'Type conta': 'inline label', 'Certitude': 'no label', });
lyr_parcour_5.set('fieldLabels', {'id': 'no label', });
lyr_parcour_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});