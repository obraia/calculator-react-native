import { combineReducers } from 'redux';

import calcReducers from './calc';
import menuReducers from './menu';

const reducers = combineReducers({
    calcReducers,
    menuReducers
});

export { reducers };