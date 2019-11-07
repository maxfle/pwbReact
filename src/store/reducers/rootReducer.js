import authReducer from './authReducer';
import fieldReducer from './fieldReducer';
import { combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    field: fieldReducer,
    firestore: firestoreReducer
});

export default rootReducer;
