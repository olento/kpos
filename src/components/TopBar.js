import React from 'react';

const Layout = (props) => (
    <div>
	<div className="d-flex top-bar">
	    <div className="p-2"><span className="kpos">KPOS</span></div>
	    <div className="p-2">Veli-Matti Koukeri</div>
	    <div className="p-2 ml-auto">Search goes here</div>
	</div>
	<div className="d-flex top-bar">
	    <div className="p-2">&larr; Etusivu</div>
	</div>
    </div>
);

export default Layout;
