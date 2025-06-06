import {combineReducers} from 'redux'
import skillsReducers from './skillsReducers';

export default combineReducers({
    skills: skillsReducers
});