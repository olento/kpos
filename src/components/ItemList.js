import React from 'react';
import { connect } from 'react-redux';
import ItemListItem from './ItemListItem';

const style = {
    background: "white",
}

const ItemList = (props) => (
    <div>
	<table className="table" style={style}>
	    <thead>
		<tr>
		    <th scope="col">Tuote</th>
		    <th scope="col">Hinta</th>
		    <th scope="col"></th>
		</tr>
	    </thead>
	    <tbody>
		{props.items.map((item) => {
		     return <ItemListItem key={item.id} id={item.id} />
		 })}
	    </tbody>
	</table>
    </div>
);

const mapStateToProps = (state) => {
    return {
	items: state.items
    };
};

export default connect(mapStateToProps)(ItemList);
