import View from './view.js';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from '../../images/icon-location.svg';
class Map extends View {
  _parentElement;
  _zoomLevel = 13;
  _myicon;

  rederMap(data) {
    this._parentElement = L.map('map', { zoomControl: false });
    console.log(data.lat, -data.lon);

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoiYmlsYWFsNDQxIiwiYSI6ImNrczI4cjltZTBiOG0ybnBmamJmNzR3dHoifQ.WsDUDVswgNeJJSytD2nNxg',
      }
    ).addTo(this._parentElement);

    this._myicon = L.icon({
      iconUrl: `${icon}`,
      iconSize: [34, 44],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });

    this.updateMap(data);
  }

  updateMap(data) {
    this._parentElement.setView([data.lat, data.lon], this._zoomLevel);
    L.marker([data.lat, data.lon], { icon: this._myicon }).addTo(
      this._parentElement
    );
  }
}

export default new Map();
