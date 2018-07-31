// export default function() {
//   return [
//     {
//       id: 1,
//       placeName:'Gdynia City Museum',
//       lat:54.5160757,
//       lng:18.5448994
//     },
//     {
//       id: 2,
//       placeName:'Emigration Museum',
//       lat:54.5331856,
//       lng:18.5476213
//     },
//     {
//       id: 3,
//       placeName:'Pier in Orłowo',
//       lat:54.4835609,
//       lng:18.567609
//     },
//     { id: 4,
//       placeName:'Gdynia Aquarium',
//       lat:54.5194669,
//       lng:18.5532754
//     },
//     { id: 5,
//       placeName:'ORP Błyskawica',
//       lat:54.5194669,
//       lng:18.5528247
//     },
//     { id: 6,
//       placeName:'Marina Gdynia',
//       lat:54.518265,
//       lng:18.5523634
//     },
//     { id: 7,
//       placeName:'Fountain in square Kościuszki',
//       lat:54.5190304,
//       lng:18.5482533
//     },
//     { id: 8,
//       placeName:'Overlook on the port',
//       lat:54.531942,
//       lng:18.5443668
//     },
//     { id: 9,
//       placeName:'Antoni Abraham monument ',
//       lat:54.5217105,
//       lng:18.5394693
//     },
//     { id: 10,
//       placeName:'Overlook Kamienna Góra ',
//       lat:54.517844,
//       lng:18.5406696
//     },
//     { id: 11,
//       placeName:'Cliff in Orłowo',
//       lat:54.4870384,
//       lng:18.5631346
//     },
//     { id: 12,
//       placeName:'Gdynia InfoBox',
//       lat:54.5206806,
//       lng:18.5450387
//     },
//     { id: 13,
//       placeName:'Józef Piłsudski monument',
//       lat:54.5091416,
//       lng:18.5391822
//     },
//     { id: 14,
//       placeName:'Boulevard',
//       lat:54.5088721,
//       lng:18.5438534
//     },
//     { id: 15,
//       placeName:'Gdynia City Beach',
//       lat:54.5146755,
//       lng:18.5490399
//     },
//     { id: 16,
//       placeName:'Gdynia Seafront Promenade',
//       lat:54.5175618,
//       lng:18.5556129
//     },
//     { id: 17,
//       placeName:'Gdynia Film Center',
//       lat:54.5164517,
//       lng:18.5428894
//     }
//   ]
// }

const initialState = {
  places: [
    {placeName:'Gdynia City Museum', lat:54.5160757, lng:18.5448994},
    {placeName:'Emigration Museum', lat:54.5331856, lng:18.5476213},
    {placeName:'Pier in Orłowo', lat:54.4835609, lng:18.567609},
    {placeName:'Gdynia Aquarium', lat:54.5194669, lng:18.5532754},
    {placeName:'ORP Błyskawica', lat:54.5194669, lng:18.5528247},
    {placeName:'Marina Gdynia', lat:54.518265, lng:18.5523634},
    {placeName:'Fountain in square Kościuszki', lat:54.5190304, lng:18.5482533},
    {placeName:'Overlook on the port', lat:54.531942, lng:18.5443668},
    {placeName:'Antoni Abraham monument ', lat:54.5217105, lng:18.5394693},
    {placeName:'Overlook Kamienna Góra ', lat:54.517844, lng:18.5406696},
    {placeName:'Cliff in Orłowo', lat:54.4870384, lng:18.5631346},
    {placeName:'Gdynia InfoBox', lat:54.5206806, lng:18.5450387},
    {placeName:'Józef Piłsudski monument', lat:54.5091416, lng:18.5391822},
    {placeName:'Boulevard', lat:54.5088721, lng:18.5438534},
    {placeName:'Gdynia City Beach', lat:54.5146755, lng:18.5490399},
    {placeName:'Gdynia Seafront Promenade', lat:54.5175618, lng:18.5556129},
    {placeName:'Gdynia Film Center', lat:54.5164517, lng:18.5428894}
  ],
  query: '',
  findplaces: [],
  clickFlag: false,
  markers: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case "ADD_MARKER":
     return { ...state, markers: [...state.markers, action.payload] };
   default:
     return state;
  }
};

export default rootReducer;
