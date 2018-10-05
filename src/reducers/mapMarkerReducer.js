export default (state = { isMarkerShown: true}, action) => {

  switch (action.type) {
    case 'SHOW_MARKER':
      return  {
        isMarkerShown: action.isMarkerShown
    };
    default:
      return state
  }
}
