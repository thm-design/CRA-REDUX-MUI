// import FontIcon from 'material-ui/FontIcon';
// import IconButton from 'material-ui/IconButton';
// import RaisedButton from 'material-ui/RaisedButton';
// import Toggle from 'material-ui/Toggle';

// import {
//     BodyContainer,
//     ResponsiveAppBar,
//     ResponsiveDrawer,
//     setResponsive,
//     toggleDrawerDock,
//     toggleDrawerOpen
// } from 'material-ui-responsive-drawer';

// import Dimensions from 'react-dimensions';
import React, {Component} from 'react';

// import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

import AppBar from 'material-ui/AppBar';
import DataTable from './components/table/DataTable';

import windowDimensions from 'react-window-dimensions';

class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }
    render() {
        const windowHeight = this.props.height;
        return (
            <MuiThemeProvider>
                <div>
                    <div className="sidebarContainer">
                        <div className="sidebarContainerInnerContainer">
                            <div className="sidebarContainerInnerHeaderContainer">
                                <h1 className="sidebarContainerInnerHeader">Sidebar</h1>
                            </div>
                        </div>
                    </div>
                    <AppBar
                        showMenuIconButton={false}
                        className="headerBarContainer"
                        title={<span className="headerBarTitle">iQmetrix | HUB</span>}
                        onTitleTouchTap={() => {}}
                    />
                    <div className="bodyContainer">
                        <div className="bodyHeader">
                            <h1 className="bodyHeader">Suppliers</h1>
                            <DataTable windowHeight={windowHeight} />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

// App.propTypes = {
//     toggleDrawerOpen: PropTypes.func.isRequired,
//     toggleDrawerDock: PropTypes.func.isRequired,
//     setResponsive: PropTypes.func.isRequired
// };
//
// const mapStateToProps = state => {
//     const {browser, responsiveDrawer} = state;
//     return {
//         browser,
//         responsiveDrawer
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         toggleDrawerOpen: () => {
//             dispatch(toggleDrawerOpen());
//         },
//         toggleDrawerDock: () => {
//             dispatch(toggleDrawerDock());
//         },
//         setResponsive: isResponsive => {
//             dispatch(setResponsive(isResponsive));
//         }
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default windowDimensions()(App);
