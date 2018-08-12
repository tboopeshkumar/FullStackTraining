import React, { Component } from "react";
import './tradedetails.css';
import TradeTableContainer from '../../containers/tradetable';
import TradeEditorContainer from '../../containers/tradeeditor';
import TradeSearchBarContainer from '../../containers/tradesearchbar';

class TradeDetails extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="gridContainer">
                <div className="tradeSearchBar">
                    <TradeSearchBarContainer/>
                </div>
                <div className="tradeTable">
                    <TradeTableContainer  
                    />
                </div>
                <div className="tradeEditor">
                    <TradeEditorContainer />
                </div>
                
            </div>

        );
    }
}
export default TradeDetails;