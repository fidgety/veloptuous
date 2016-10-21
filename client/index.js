import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import Home from './pages/home';
import Planner from './pages/planner';

require('./sass-modules/reset.scss');
require('./sass-modules/style.scss');

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/planner" component={Planner} />
        </Router>
    </Provider>
), document.getElementById('app'));
