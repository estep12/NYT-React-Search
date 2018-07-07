import React, { Component } from 'react';
import Home from "./components/Home";
import Saved from "./components/Saved";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Jumbotron />
                </div>
            </div>
        )
    }
}

export default App;