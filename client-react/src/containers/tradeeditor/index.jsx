import React, { Component } from 'react';
import {connect} from 'react-redux';
import TradeEditor from '../../components/tradeeditor';
import { saveTrade , clearSaveStatus } from '../../actions/tradeeditor';
import { fetchRefData } from '../../actions/refdata';

class TradeEditorContainer extends Component{

    constructor(props){
        super(props);
    }

    onSaveTrade = (tradeInfo) =>{
        saveTrade(tradeInfo);
    }

    clearSaveStatus =()=>{
        this.props.clearSaveStatus();
    }
    componentDidMount = ()=>{
        fetchRefData();
    }

    render(){
        return(
            <TradeEditor 
                selectedTrade={this.props.selectedTrade}
                commodities={this.props.commodities}
                counterparties={this.props.counterparties}
                locations={this.props.locations}
                currencies={this.props.currencies}
                saveTrade={this.onSaveTrade}
                saveStatus={this.props.saveStatus}
                clearSaveStatus={this.clearSaveStatus}
                error={this.props.error}
                tradeId={this.props.tradeId}
                defaultState={this.props.defaultState}
            />
        )
    }
}
function mapStateToProps(state) {
    const  { selectedTrade } = state.tradeDetails;
    const  { saveStatus, error, tradeId,defaultState } = state.tradeEditor;
    const  { commodities,counterparties,locations,currencies } = state.refData;
    const newState = { saveStatus, error, tradeId , selectedTrade, commodities,counterparties,locations,currencies,defaultState};
    return newState;
}

export default connect(mapStateToProps, { clearSaveStatus })(TradeEditorContainer);


