import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './css/style.min.css';

import Home from './components/Home';
import Details from './components/Details';
import NotFound from './components/NotFound';

const App = (
    <Router basename="/pokebook" >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={Details} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(App, document.querySelector('#root'));
