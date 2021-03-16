import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Quiz from './Quiz';

export default function App(props) {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/quiz/:code" component={Quiz} />
                </Switch>
            </Router>
        </div>
    )
}