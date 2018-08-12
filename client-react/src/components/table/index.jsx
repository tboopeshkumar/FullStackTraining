import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';
import './table.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { height : 250}
    }

    onGridReady = (params) => {
        this.gridApi = params.api;
        params.api.sizeColumnsToFit();
        this.setState({ height : window.innerHeight - 130 });
        window.addEventListener('resize', function(rparams) {
          this.setState({ height : window.innerHeight - 130 });
          setTimeout(function() {
            params.api.sizeColumnsToFit();
          });
        }.bind(this));
    }

    onSelectionChanged = (params) => {
        if(this.gridApi){
            this.props.onSelectedItemChanged(this.gridApi.getSelectedRows()[0]);
        }
    }

    render() {
        return (
                <div style={{height : this.state.height}} className="ag-theme-material">
                    <AgGridReact  autoSizePadding={true} 
                        onGridReady={this.onGridReady}
                        rowSelection="single"
                        onSelectionChanged={this.onSelectionChanged.bind(this)}
                        columnDefs={this.props.columnHeaders}
                        rowData={this.props.rows}>
                    </AgGridReact>
                </div>
               
            );
    }
}

export default Table;