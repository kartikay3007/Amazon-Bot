import { combineReducers } from "redux";
import counterReducer from './Counter/Counter.reducer';

const initialState = {
    counter: 1,
}

const rootReducer = (state = initialState, action) => {
    combineReducers({
        counter: counterReducer,
    })
}
export default rootReducer;