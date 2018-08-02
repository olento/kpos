import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppRouter from '../routers/AppRouter';
import TopBar from './TopBar';
import Navigation from './Navigation';

const Layout = (props) => (
    <div className="row justify-content-center h-100">
	<div className="col-2 navigation">
	    <Route component={Navigation} />
	</div>
	<div className="col-8 content">
	    <TopBar />
	    <AppRouter />
	</div>
	<div className="col-2 mdf">MFD</div>
    </div>
);

export default Layout;
