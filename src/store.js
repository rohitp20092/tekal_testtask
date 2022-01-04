import { createStore } from 'redux'
import rootReducer from './components/reducer/ListData'

const store = createStore(rootReducer);

export default store;