export function onApiError() {
  return {
    type: "ON_API_ERROR",
    onApiError: true
  }
}

export function initPlaces(places) {
  return {
    type: "INIT_PLACES",
    places
  }
}

export function addMarker(marker) {
  return {
    type: "ADD_MARKER",
    marker
  }
}

export function updateQuery(query) {
  return {
    type: "UPDATE_QUERY",
    query
  }
}

export function filterPlaces(filteredLocations, modifiedPlaces) {
  return {
    type: "FILTER_PLACES",
    filteredLocations,
    modifiedPlaces
  }
}

export function addMap(map) {
  return {
    type: "ADD_MAP",
    map
  }
}

export function onMarkerClick(place, marker, e) {
  if(marker.dataAddress === undefined)
  {
    marker.dataAddress = " not provided"
  }
  return {
    type: "ON_MARKER_CLICK",
    activeMarker: marker,
    showingInfoWindow: true,
    selectedPlace: {name: place.name, title: marker.title, address: marker.dataAddress}
  }
}

export function onError(){
  return {
    type: "ERROR",
    hasError: true
  }
}
