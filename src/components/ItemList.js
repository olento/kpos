import React from 'react';
import { connect } from 'react-redux';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';

class ItemList extends React.Component 
{
    constructor(props)
    {
	super(props);

	this.state = {
	    columnDefs: [
		{ headerName: "Tuote", field: "name",  editable: true },
		{ headerName: "Hinta", field: "price", editable: true },
	    ]
	}
    }

    onGridReady(params)
    {
	this.gridApi = params.api;
	this.columnApi = params.columnApi;
	this.gridApi.sizeColumnsToFit();
    }

    render()
    {
	const style = {
	    height: "400px",
	    width: "100%",
	    fontSize: "1rem"
	};
	
	return (
	    <div className="ag-theme-material" style={style}>
		<AgGridReact
		    columnDefs={this.state.columnDefs}
		    rowData={this.props.rowData}
		    onGridReady={this.onGridReady}>
		</AgGridReact>
	    </div>
	);
    }
}

// Couldn't get this to work yet...
// deltaRowDataMode
// getRowNodeId={(data) => data.id}

const mapStateToProps = (state) => {
    return {
	rowData: state.items.rowData
    };
};

export default connect(mapStateToProps)(ItemList);
