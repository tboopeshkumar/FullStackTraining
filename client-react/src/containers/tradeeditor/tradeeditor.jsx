import React, { Component } from 'react';
import {connect} from 'react-redux';
import TradeEditor from '../../components/tradeeditor/tradeeditor';

class TradeEditorContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TradeEditor 
            selectedTrade={this.props.selectedTrade}
            commodities={this.props.commodities}
            counterparties={this.props.counterparties}
            locations={this.props.locations}
            />
        )
    }
}
function mapStateToProps(state) {
    const  {selectedTrade, commodities,counterparties,locations} = state.tradeDetailsReducers;
    return {selectedTrade, commodities,counterparties,locations};
}

export default connect(mapStateToProps)(TradeEditorContainer);


