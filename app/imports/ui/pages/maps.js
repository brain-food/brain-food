import {Template} from 'meteor/templating';
Markers = new Mongo.Collection('markers');

if (Meteor.isClient) {
  Template.Google_Maps.onCreated(function () {
    GoogleMaps.ready('map', function (map) {
      google.maps.event.addListener(map.instance, 'click', function (event) {
        Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      });

      var markers = {};
      new google.maps.Marker({
        position: new google.maps.LatLng(21.3000, -157.8190),
        map: map.instance
      });
      new google.maps.Marker({
        position: new google.maps.LatLng(21.29221, -157.8237777),
        map: map.instance
      });
      Markers.find().observe({
        added: function (document) {
          var marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.lat, document.lng),
            map: map.instance,
            id: document._id
          });

          google.maps.event.addListener(marker, 'dragend', function (event) {
            Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() } });
          });

          markers[document._id] = marker;
        },
        changed: function (newDocument, oldDocument) {
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
        },
        removed: function (oldDocument) {
          markers[oldDocument._id].setMap(null);
          google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
          delete markers[oldDocument._id];
        }
      });
    });
  });

  Meteor.startup(function () {
    GoogleMaps.load();
  });

  Template.Google_Maps.helpers({
    mapOptions: function () {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(21.3000, -157.8190),
          zoom: 15,
        };
      }
    },
  });
}
