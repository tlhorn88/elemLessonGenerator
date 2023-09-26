const initialState = {
  lessonTemplate: [
    {
      lessonComponent: 'entering/focus activity',
      componentDescription: 'awaken brain and perform reaction exercises',
    },
    {
      lessonComponent: 'creative movement 1',
      componentDescription: 'prime brain and warm-up body',
    },
    {
      lessonComponent: 'vocal warm-up',
      componentDescription: '',
    },
    {
      lessonComponent: 'tuneful singing',
      componentDescription: '',
    },
    {
      lessonComponent: 'movement warm-up for concept',
      componentDescription: '',
    },
    {
      lessonComponent: 'sing new song',
      componentDescription: '',
    },
    {
      lessonComponent: 'review',
      componentDescription: "review focus concept from this unit's predecessor",
    },
    {
      lessonComponent: 'core focus activity',
      componentDescription: 'KAV present sound present notation',
    },
    {
      lessonComponent: 'creative movement 2',
      componentDescription: 'goal here is expression',
    },
    {
      lessonComponent: 'practice',
      componentDescription: 'practice previous unit content with reading, writing, or improvisation',
    },
    {
      lessonComponent: 'closing',
      componentDescription: '',
    },
  ],
};

function lessonTemplateReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TEMPLATE_SEQUENCE':
      return {
        ...state,
        lessonTemplate: action.payload,
      };
    default:
      return state;
  }
}

export default lessonTemplateReducer;
