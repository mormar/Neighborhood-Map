import React, {Component} from 'react';

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

export function filterPlaces(places, query) {

  let filteredLocations = places.filter(
    (place) => {
      return place.placeName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }
  );
  let modifiedPlaces = places.filter(
    (place) => {
      return place.placeName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }
  );
  if(places instanceof Array) {
    filteredLocations = (
      <ol className="places-list">
        {filteredLocations.map((place) => (
          <li key={place.placeName} lat={place.lat} lng={place.lng} aria-label={place.placeName} className="place">
            {place.placeName}
          </li>
        ))}
      </ol>
    )
  }

  return {
    type: "FILTER_PLACES",
    filteredLocations,
    modifiedPlaces
  }
}

export function onMarkerClick(place, marker, e) {
  console.log(place);
  console.log(marker);
  console.log(e);
  return {
    type: "ON_MARKER_CLICK",
    selectedPlace: place,
    activeMarker: marker,
    showingInfoWindow: true
  }
}
