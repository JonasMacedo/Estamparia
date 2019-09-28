import {BrowserRouter,Switch,Route} from 'react-router-dom';
import React from 'react';

import Index from './pages/Main/main';
import Header from './components/Header/index';

const Routes =() => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route path="/teste" component={Header}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

