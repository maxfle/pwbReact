import authReducer from './authReducer';
import fieldReducer from './fieldReducer';
import { combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    field: fieldReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
