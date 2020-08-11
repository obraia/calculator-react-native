import { combineReducers } from 'redux';

import { reducers as calcReducers } from './calc';
import { reducers as menuReducers } from './menu';

const reducers = combineReducers({
    calcReducers,
    menuReducers
});

export { reducers };