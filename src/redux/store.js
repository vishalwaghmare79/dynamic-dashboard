import { createStore } from 'redux';
import widgetsReducer from './reducer';

const store = createStore(widgetsReducer);

export default store;
