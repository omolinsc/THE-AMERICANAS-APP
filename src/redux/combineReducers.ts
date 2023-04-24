import { themesReducer } from './themes/themes.reducer';
import { Reducer, combineReducers } from "redux";
import { usersReducer } from './users/users.reducer';

const mainReducer: Reducer = combineReducers({
    themes: themesReducer,
    users: usersReducer,
});

export default mainReducer;