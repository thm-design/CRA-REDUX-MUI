import './index.css';

import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

const MaterialUiWrappedApp = () =>
    <Provider store={StoreInstance}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>;

ReactDOM.render(<MaterialUiWrappedApp />, document.getElementById('root'));
registerServiceWorker();
injectTapEventPlugin();
