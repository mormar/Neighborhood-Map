/*global google*/
import React, { Component } from 'react';
import './index.css';

class Map extends Component {

  componentDidMount() {
      window.initMap = this.initMap;
      loadJsMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY&callback=initMap');
  }

  initMap = function() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 54.5053387, lng: 18.538661},
      zoom: 13
    });

    let places = [
      ['Gdynia City Museum', 54.5160757, 18.5448994],
      ['Emigration Museum', 54.5331856, 18.5476213],
      ['Pier in Orłowo', 54.4835609, 18.567609],
      ['Gdynia Aquarium', 54.5194669, 18.5532754],
      ['ORP Błyskawica', 54.5194669, 18.5528247],
      ['Marina Gdynia', 54.518265, 18.5523634],
      ['Fountain in square Kościuszki', 54.5190304, 18.5482533],
      ['Overlook on port', 54.531942, 18.5443668],
      ['Antoni Abraham monument ', 54.5217105, 18.5394693],
      ['Overlook Kamienna Góra (Stone Mountain)', 54.517844, 18.5406696],
      ['Cliff in Orłowo', 54.4870384, 18.5631346],
      ['Gdynia InfoBox', 54.5206806, 18.5450387],
      ['Józef Piłsudski monument', 54.5091416, 18.5391822],
      ['Boulevard', 54.5088721, 18.5438534],
      ['Gdynia City Beach', 54.5146755, 18.5490399],
      ['Gdynia Seafront Promenade', 54.5175618, 18.5556129],
      ['Gdynia Film Center', 54.5164517, 18.5428894]
    ]

    for (let allPlaces = 0; allPlaces < places.length; allPlaces++) {
          let place = places[allPlaces];
          let marker = new google.maps.Marker({
            position: {lat: place[1], lng: place[2]},
            map: map,
          });
        }

  }

  render() {

    return (
      <div>
        <h1 id="main-taitel">Gdynia awesome places</h1>
        <div id="map"></div>
      </div>
    );
  }
}

function loadJsMap(src) {
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

export default Map;
