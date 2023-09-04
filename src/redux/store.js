import { createStore } from 'redux';

const initialState = {
  selectedSongs: [],
};

function rootReducer(state = initialState, action) {
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

const store = createStore(rootReducer);

export default store;
