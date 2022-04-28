import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import data from './reducer'

const store  = createStore(combineReducers({data}), applyMiddleware(thunk))

export default store