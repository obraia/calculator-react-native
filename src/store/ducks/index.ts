import { combineReducers } from 'redux';

import themeReducers from './theme';
import calcReducers from './calc';
import menuReducers from './menu';

const reducers = combineReducers({
    themeReducers,
    calcReducers,
    menuReducers
});

export { reducers };