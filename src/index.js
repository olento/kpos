import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import configureStore  from './store/configureStore';
import {BrowserRouter} from 'react-router-dom';
import Layout          from './components/Layout.js';
import { addItem, editItem }     from './actions/items'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addItem({
    name: 'Toffee',
    price: 3000000
}));

store.dispatch(addItem({
    name: 'Lakritsi',
    price: 3000000,
    createdAt: 1000
}));

const hattara = store.dispatch(addItem({
    name: 'Hattara',
    price: 3500000
}));


setTimeout(() => {
    store.dispatch(editItem(hattara.item.id, { name: 'Hattara3'}))
    console.log(store.getState());
}, 3000);

const jsx = (
    <Provider store={store}>
	<BrowserRouter>
	    <Layout />
	</BrowserRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
