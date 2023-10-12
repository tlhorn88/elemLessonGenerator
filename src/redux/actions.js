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

export const addTemplateSequence = (data) => {
  return {
    type: 'ADD_TEMPLATE_SEQUENCE',
    payload: data,
  };
};

export const updatePracticeSongs = (practiceSongs) => {
  return {
    type: 'UPDATE_PRACTICE_SONGS',
    payload: practiceSongs,
  };
}; 