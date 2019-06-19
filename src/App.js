import React, { Component } from 'react';
import "./App.css";

import Navigation from './app/Navigation'
import Panel from './app/Panel';

class App extends Component {
    render(){
        return(
            <div className="app">
                <Navigation></Navigation>
                <Panel></Panel>
            </div>
        );
    }
}

export default App;