import { combineReducers } from 'redux';
import holdingReducer from './holdingReducer';
import conceptSequenceReducer from './conceptSequenceReducer';
import lessonTemplateReducer from './lessonTemplateReducer';

const rootReducer = combineReducers({
  selectedSongs: holdingReducer,
  conceptSequence: conceptSequenceReducer,
  lessonTemplate: lessonTemplateReducer,
});

export default rootReducer;
