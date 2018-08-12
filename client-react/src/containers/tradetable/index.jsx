import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tradeSelected } from '../../actions/tradedetails';
import TradeTable from '../../components/tradetable';

class TradeTableContainer extends Component {

    constructor(props) {
        super(props);
    }
    onSelectedItemChanged = (selectedItem) =>{
        this.props.tradeSelected(selectedItem);
    }

    render() {
        return (
            <TradeTable 
            columnHeaders={this.props.columnHeaders} 
            rows={this.props.rows}
            onSelectedItemChanged={this.onSelectedItemChanged}
            />
        )
    }
}
function mapStateToProps(state) {
    
    return {
        columnHeaders: state.tradeDetailsReducers.columnHeaders,
        rows: state.tradeDetailsReducers.rows
    };
}

export default connect(mapStateToProps,{tradeSelected : tradeSelected})(TradeTableContainer);


