const initialState = {
  conceptSequence: [{ concept: 'tuneful singing', conceptType: 'kinder' },
  { concept: 'beat', conceptType: 'kinder' },
  { concept: 'loud soft', conceptType: 'kinder' },
  { concept: 'high low chant', conceptType: 'kinder' },
  { concept: 'fast slow', conceptType: 'kinder' },
  { concept: 'high low melody', conceptType: 'kinder' },
  { concept: 'long short', conceptType: 'kinder' },
  { concept: 'qsd', conceptType: 'rhythm' },
  { concept: 'sm', conceptType: 'melody' },
  { concept: 'Z', conceptType: 'rhythm' },
  { concept: 'l', conceptType: 'melody' },
  { concept: '2$', conceptType: 'rhythm' },
  { concept: 'd', conceptType: 'melody' },
  { concept: 'w', conceptType: 'rhythm' },
  { concept: 'r', conceptType: 'melody' },
  { concept: 'xxcc', conceptType: 'rhythm' },
  { concept: 'd5', conceptType: 'melody' },
  { concept: '4$', conceptType: 'rhythm' },
  { concept: 'l,', conceptType: 'melody' },
  { concept: 'sxc', conceptType: 'rhythm' },
  { concept: 's,', conceptType: 'melody' },
  { concept: 'xcd', conceptType: 'rhythm' },
  { concept: "d'", conceptType: 'melody' },
  { concept: 'a', conceptType: 'rhythm' },
  { concept: 'l5', conceptType: 'melody' },
  { concept: 'aqa', conceptType: 'rhythm' },
  { concept: 'f', conceptType: 'melody' },
  { concept: 'ra', conceptType: 'rhythm' },
  { concept: 't,', conceptType: 'melody' },
  { concept: '3$', conceptType: 'rhythm' },
  { concept: 't', conceptType: 'melody' },
  { concept: 'gc', conceptType: 'rhythm' },
  { concept: 'ar', conceptType: 'melody' }],
};

function conceptSequenceReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONCEPT_SEQUENCE':
      return {
        ...state,
        conceptSequence: action.payload,
      };
    default:
      return state;
  }
}

export default conceptSequenceReducer;
