import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => (
    <header>
	<p>
	    <NavLink exact={true} activeClassName="is-active" to="/">Etusivu</NavLink>
	    <NavLink activeClassName="is-active" to="/products">Nimikkeet</NavLink>
	    <NavLink activeClassName="is-active" to="/accounting">Kirjanpito</NavLink>
	    <NavLink activeClassName="is-active" to="/register">Kortisto</NavLink>
	    <NavLink activeClassName="is-active" to="/system">Järjestelmä</NavLink>
	    <NavLink activeClassName="is-active" to="/reporting">Raportointi</NavLink>
	    <NavLink activeClassName="is-active" to="/devices">Laitteet</NavLink>
	</p>
    </header>
);

export default Navigation;
