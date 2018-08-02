import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PageProducts  from '../components/PageProducts.js';
import PageFront     from '../components/PageFront.js';
import Navigation    from '../components/Navigation.js';
import NotFoundPage  from '../components/NotFoundPage.js';

const AppRouter = () => (
    <div style={{padding: "1rem"}}>
	<Switch>
	    <Route exact path="/"          component={PageFront} />
 	    <Route exact path="/products"  component={PageProducts} />
	    <Route component={NotFoundPage} />
	</Switch>
    </div>
);

export default AppRouter;
