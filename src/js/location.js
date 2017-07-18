require('bootstrap');
require('../less/location.less');
require('../less/common.less');
require('./common.js');

var loadGoogleMapsApi = require('load-google-maps-api-2');

loadGoogleMapsApi.key = 'AIzaSyA8LGiqeQNygYgQDoJPDOLMRcnW8o8HZeY';
loadGoogleMapsApi.language = 'ko';
loadGoogleMapsApi.version = '3';

var googleMaps;

loadGoogleMapsApi().then(function (locationMap) {
    googleMaps = locationMap;
    var map = new locationMap.Map($('#map')[0], {
        center: {lat: 37.610793, lng: 126.978426},
        scrollwheel: false,
        zoom: 18
    });
    var marker = new locationMap.Marker({
        position: {lat: 37610793, lng: 126.978426},
        map: map,
        title: '지애뇨711 서울시 종로구 평창동'
    });
}).catch(function (error) {
    console.log(error)
});