// export const addToHolding = (songTitle) => {
//   return (dispatch, getState) => {
//     const selectedSongs = getState().selectedSongs;
//     if(!selectedSongs.includes(songTitle)) {
//       dispatch({
//         type: 'ADD_TO_HOLDING',
//         payload: songTitle,
//       });
//     }
//   };
// };

export const addToHolding = (songTitle) => {
  return {
    type: 'ADD_TO_HOLDING',
    payload: songTitle,
  };
};

export const removeFromHolding = (songTitle) => {
  return {
    type: 'REMOVE_FROM_HOLDING',
    payload: songTitle,
  };
};

export const addConceptSequence = (data) => {
  return {
    type: 'ADD_CONCEPT_SEQUENCE',
    payload: data,
  };
};
