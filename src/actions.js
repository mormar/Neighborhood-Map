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
