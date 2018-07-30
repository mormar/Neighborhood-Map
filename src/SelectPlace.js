export const selectPlace = (place) => {
  console.log('Click: ', place.placeName);
  console.log(place.id);
  console.log(place);
  return {
    type: "PLACE_SELECTED",
    payload: place
  }
};
