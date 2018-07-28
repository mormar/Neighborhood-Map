export const selectPlace = (place) => {
  console.log('Click: ', place.placeName);
  return {
    type: "PLACE_SELECTED",
    payload: place
  }
};
