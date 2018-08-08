const initialState = {
  places: [
    {placeName:'Gdynia City Museum', lat:54.516101, lng:18.547101, id:0},
    {placeName:'Emigration Museum', lat:54.533217, lng:18.549821, id:1},
    {placeName:'Pier in Orłowo', lat:54.479944, lng:18.565405, id:2},
    {placeName:'Gdynia Aquarium', lat:54.518359, lng:18.557323, id:3},
    {placeName:'ORP Błyskawica', lat:54.519566, lng:18.551178, id:4},
    {placeName:'Marina Gdynia', lat:54.517409, lng:18.552474, id:5},
    {placeName:'Fountain in square Kościuszki', lat:54.519068, lng:18.548480, id:6},
    {placeName:'Overlook on the port', lat:54.534769, lng:18.547789, id:7},
    {placeName:'Antoni Abraham monument ', lat:54.522040, lng:18.543012, id:8},
    {placeName:'Overlook Kamienna Góra ', lat:54.515564, lng:18.544118, id:9},
    {placeName:'Cliff in Orłowo', lat:54.485347, lng:18.568868, id:10},
    {placeName:'Gdynia InfoBox', lat:54.518749, lng:18.541781, id:11},
    {placeName:'Józef Piłsudski monument', lat:54.508914, lng:18.539483, id:12},
    {placeName:'Boulevard', lat:54.506985, lng:18.555088, id:13},
    {placeName:'Gdynia City Beach', lat:54.515789, lng:18.550382, id:14},
    {placeName:'Gdynia Seafront Promenade', lat:54.518980, lng:18.559444, id:15},
    {placeName:'Gdynia Film Center', lat:54.517018, lng:18.543253, id:16}
  ],
  query: '',
  findplaces: [],
  clickFlag: false,
  markers: [],
  itemList: [],
  modifiedPlaces: [],
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {},
  map: [],
  hasError: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case "ADD_MAP":
      return Object.assign({}, state, {
        map: action.map
   })
   case "ADD_MARKER":
      return Object.assign({}, state, {
        markers: [...state.markers, action.marker]
   })
   case "UPDATE_QUERY":
      return Object.assign({}, state, {
        query: action.query
   })
   case "FILTER_PLACES":
      return Object.assign({}, state, {
        itemList: action.filteredLocations,
        modifiedPlaces: action.modifiedPlaces
   })
   case "ON_MARKER_CLICK":
      return Object.assign({}, state, {
        showingInfoWindow: action.showingInfoWindow,
        activeMarker: action.activeMarker,
        selectedPlace: action.selectedPlace
   })
   case "ERROR":
      return Object.assign({}, state, {
        hasError: action.hasError
   })
   default:
     return state;
  }
};

export default rootReducer;
