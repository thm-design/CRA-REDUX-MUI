import {combineReducers} from 'redux';
import {responsiveDrawer} from 'material-ui-responsive-drawer';
import {responsiveStateReducer} from 'redux-responsive';

const rootReducer = combineReducers({
    browser: responsiveStateReducer,
    responsiveDrawer: responsiveDrawer
});

export default rootReducer;
