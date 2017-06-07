import './index.css';

import App from './App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

const MaterialUiWrappedApp = () =>
    <Provider store={StoreInstance}>
        <App />
    </Provider>;

ReactDOM.render(<MaterialUiWrappedApp />, document.getElementById('root'));
registerServiceWorker();
