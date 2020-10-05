import {combineReducers} from 'redux';
import {historyReducer} from './history';

const Reducers = combineReducers({history: historyReducer});

export default Reducers;
