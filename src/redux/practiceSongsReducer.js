const initialState = {
  selectedPracticeSongs: Array(5).fill(''),
};

function practiceSongsReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PRACTICE_SONGS':
    return {
      ...state,
      selectedPracticeSongs: action.payload,
    };
    default:
      return state;
  }
}

export default practiceSongsReducer;