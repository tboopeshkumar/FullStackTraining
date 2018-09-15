import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tradeDeleted,tradeSelected, fetchTrades} from '../../actions/tradedetails';
import TradeTable from '../../components/tradetable';

class TradeTableContainer extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchTrades();
      }
    onSelectedItemChanged = (selectedItem) =>{
        this.props.tradeSelected(selectedItem);
        //this.props.tradeDeleted(selectedItem);
    }

    render() {
        const { error,loading, columnHeaders,rows} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
          }
      
          if (loading) {
            return <div>Loading...</div>;
          }

        return (

        <TradeTable 
            columnHeaders={columnHeaders} 
            rows={rows}
            onSelectedItemChanged={this.onSelectedItemChanged}
        />

        )
    }
}


const mapStateToProps = state => ({
    columnHeaders: state.tradeDetails.columnHeaders,
    rows : state.tradeDetails.rows,
    loading: state.tradeDetails.loading,
    error: state.tradeDetails.error
  });


export default connect(mapStateToProps,
    {tradeSelected : tradeSelected, tradeDeleted : tradeDeleted,fetchTrades : fetchTrades})(TradeTableContainer);


