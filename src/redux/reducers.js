import { combineReducers } from 'redux';
import holdingReducer from './holdingReducer';
import conceptSequenceReducer from './conceptSequenceReducer';
import lessonTemplateReducer from './lessonTemplateReducer';
import practiceSongsReducer from './practiceSongsReducer';

const rootReducer = combineReducers({
  selectedSongs: holdingReducer,
  conceptSequence: conceptSequenceReducer,
  lessonTemplate: lessonTemplateReducer,
  practiceSongs: practiceSongsReducer,
});

export default rootReducer;
