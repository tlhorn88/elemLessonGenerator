import { combineReducers } from 'redux';
import holdingReducer from './holdingReducer';
import conceptSequenceReducer from './conceptSequenceReducer';

const rootReducer = combineReducers({
  selectedSongs: holdingReducer,
  conceptSequence: conceptSequenceReducer,
});

export default rootReducer;
