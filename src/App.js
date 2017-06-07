import './App.css';

import React, {Component} from 'react';

import Home from './components/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>
                        Welcome to React
                    </h2>
                </div>
                <div className="App-intro">
                    <Home />
                </div>
            </div>
        );
    }
}
export default App;
