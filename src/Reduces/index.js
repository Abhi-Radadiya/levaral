import { combineReducers } from "redux";
import  UpdateReducer from '../Reduces/UpdateState'

const reducers = combineReducers({
    Email:UpdateReducer.Email,
    Subject:UpdateReducer.Subject,
    Message:UpdateReducer.Message,
})  

export default reducers