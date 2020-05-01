import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import getKegReducer from './get-keg-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  selectedKeg: getKegReducer
});

export default rootReducer;