const initialState = {
  places: [],
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
    case "INIT_PLACES":
      return Object.assign({}, state, {
        places: action.places
   })
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
