const initialState = {
  selectedSongs: [],
};

function holdingReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_HOLDING':
      const songTitle = action.payload;
      if (state.selectedSongs.includes(songTitle)) {
        return state;
      } else {
        return {
          ...state,
          selectedSongs: [...state.selectedSongs, action.payload],
        };
      }
    case 'REMOVE_FROM_HOLDING':
      return {
        ...state,
        selectedSongs: state.selectedSongs.filter(
          (songTitle) => songTitle !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default holdingReducer;
