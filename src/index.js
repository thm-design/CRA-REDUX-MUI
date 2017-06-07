import './index.css';
import './toolbox/theme.css';

import App from './App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import theme from './toolbox/theme.js';

const StoreInstance = Store();

const MaterialUiWrappedApp = () =>
    <Provider store={StoreInstance}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>;

ReactDOM.render(<MaterialUiWrappedApp />, document.getElementById('root'));
registerServiceWorker();
