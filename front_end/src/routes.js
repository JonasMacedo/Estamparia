import {BrowserRouter,Switch,Route} from 'react-router-dom';
import React from 'react';

import Index from './pages/Main/main';

const Routes =() => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

