import React, { Component } from 'react';
import Table from '../table/table';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './tradetable.css';

class TradeTable extends Component {
    constructor(props) {
        super(props);

       
    }
    
    render() {
        return (
            <Table
                columnHeaders={this.props.columnHeaders}
                onSelectedItemChanged={this.props.onSelectedItemChanged}
                rows={this.props.rows}>
            </Table>

        );
    }
}

export default TradeTable;