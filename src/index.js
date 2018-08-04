import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import configureStore  from './store/configureStore';
import {BrowserRouter} from 'react-router-dom';
import Layout          from './components/Layout.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const rowData = [
    { id: 0, name: "Suklaa",   price: 3.00 },
    { id: 1, name: "Toffee",   price: 2.50 },
    { id: 2, name: "Lakritsi", price: 2.50 },
    { id: 3, name: "Hattara",  price: 1.50 },
];

store.dispatch({
    type: 'ROW_DATA_CHANGED',
    rowData: rowData.slice(0)
});

setTimeout(() => {
    rowData.push({
	id: 4,
	name: "Megahattara",
	price: 3.00
    });

    rowData[3].price = 1.75;

    store.dispatch({
	type: 'ROW_DATA_CHANGED',
	rowData: rowData.slice(0)
    });
}, 5000);


const jsx = (
    <Provider store={store}>
	<BrowserRouter>
	    <Layout />
	</BrowserRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
