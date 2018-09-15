import React, { Component } from 'react';
import {connect} from 'react-redux';
import TradeSearchBar from '../../components/tradesearchbar';

class TradeSearchBarContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TradeSearchBar
            commodities={this.props.commodities}
            counterparties={this.props.counterparties}
            locations={this.props.locations}
            />
        )
    }
}
function mapStateToProps(state) {
    const  {commodities,counterparties,locations} = state.tradeDetails;
    return {commodities,counterparties,locations};
}

export default connect(mapStateToProps)(TradeSearchBarContainer);


