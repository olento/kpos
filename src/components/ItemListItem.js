import React from 'react';
import { connect } from 'react-redux';
import { removeItem, editItem } from '../actions/items';

class ItemListItem extends React.Component 
{
    constructor(props)
    {
	super(props);
    }
    
    onClickRemove = () => {
	const {dispatch, id} = this.props;
	dispatch(removeItem({ id }));
    };

    onChangePrice = () => {

    };
    
    onChangeName = (e) => {
	const name = e.target.value;
	const {dispatch, id} = this.props;
	dispatch(editItem(id, { name }));
    };
    
    render()
    {
	return (
	    <tr>
		<td> 
		    <input onChange={this.onChangeName} value={this.props.item.name} />
		</td>
		<td>
		    <input onChange={this.onChangePrice} value={this.props.item.price / 100000} />
		</td>
		<td>
		    <button onClick={this.onClickRemove}>Remove</button>
		</td>
	    </tr>
	);
    };
}

const mapStateToProps = (state, props) => {
    return {
	item: state.items.find((item) => item.id === props.id)
    };
};

export default connect(mapStateToProps)(ItemListItem);
