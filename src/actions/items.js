import uuid from 'uuid';

export const addItem = ({
    name      = '',
    price     = '',
    inprice   = 0,
    createdAt = 0,
    updatedAt = 0,
} = {}) => ({
    type: 'ADD_ITEM',
    item: {
	id: uuid(),
	name,
	price,
	inprice,
	createdAt,
	updatedAt
    }
});

export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});

export const editItem = (id, updates) => ({
    type: 'EDIT_ITEM',
    id,
    updates
});
