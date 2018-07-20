import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'

class App extends Component {

  state = {
    places: [
      ['Gdynia City Museum', 54.5160757, 18.5448994],
      ['Emigration Museum', 54.5331856, 18.5476213],
      ['Pier in Orłowo', 54.4835609, 18.567609],
      ['Gdynia Aquarium', 54.5194669, 18.5532754],
      ['ORP Błyskawica', 54.5194669, 18.5528247],
      ['Marina Gdynia', 54.518265, 18.5523634],
      ['Fountain in square Kościuszki', 54.5190304, 18.5482533],
      ['Overlook on the port', 54.531942, 18.5443668],
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
  }

  render() {
    return (
      <div>
        <Map
          cityPlaces={this.state.places}>
        </Map>
      </div>
    );
  }
}

export default App;
