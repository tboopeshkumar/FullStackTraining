import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './tradeeditor.css';


export default class TradeEditor extends Component {

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        
        if (!prevState || prevState.tradeInfo._id == "-1" || (nextProps.saveStatus && nextProps.saveStatus == 'success')) {
            if(nextProps.saveStatus == "success" | nextProps.saveStatus == "failed"){
                return { tradeInfo: { ...nextProps.defaultState } , statusDialogOpen :  true};
            }
            else
                return { tradeInfo: { ...nextProps.defaultState } };
        } else if (nextProps.selectedTrade && nextProps.selectedTrade._id != prevState.tradeInfo._id) {
            const newDate = new Date(nextProps.selectedTrade.tradeDate).toISOString().slice(0, 10);
            const tradeInfo = { ...nextProps.selectedTrade, tradeDate: newDate };
            return { tradeInfo };
        }
        return prevState;
    }

    handleSideChange = event => {
        let newTradeInfo = { ...this.state.tradeInfo, side: event.target.value };
        this.setState({ ...this.state, tradeInfo: newTradeInfo });
    };
    handleSelectionChange = name => event => {
        let newTradeInfo = { ...this.state.tradeInfo, [name]: event.target.value };
        this.setState({ ...this.state, tradeInfo: newTradeInfo });
    };
    handleChange = name => event => {
        let newTradeInfo = { ...this.state.tradeInfo, [name]: event.target.value };
        this.setState({ ...this.state, tradeInfo: newTradeInfo });
    };
    handleClearClick = event => {
        const clearedState = { ...this.state, tradeInfo: { ...this.state.defaultState, _id: '-1' } };
        this.setState(clearedState);
    }

    handleSaveClick = event => {
        this.props.saveTrade(this.state.tradeInfo);
    }

    handleClose = () => {
        this.props.clearSaveStatus();
        this.setState({...this.state, statusDialogOpen: false });
    };

    render() {
        const { commodities, counterparties, locations, currencies } = this.props;
        return (
            <div >
                <div className="tradeEditorHeader">
                    <div className="tradeEditorHeaderContent">Trade Id {this.state.tradeInfo._id}</div>
                </div>

                <form className="tradeEditorContainer">
                    <TextField
                        id="tradeDate"
                        label="Trade Date"
                        type="date"
                        value={this.state.tradeInfo.tradeDate}
                        className="tradeEditorTextField"
                        margin="normal"
                        onChange={this.handleChange('tradeDate')}
                    />

                    <TextField
                        id="commodity"
                        label="Commodity"
                        select
                        className="tradeEditorTextField"
                        margin="normal"
                        value={this.state.tradeInfo.commodity}
                        onChange={this.handleSelectionChange('commodity')}
                    >
                        {commodities && commodities.map(option => (
                            <MenuItem key={option.id} value={option.code}>
                                {option.code}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormControl component="fieldset" className="sideFieldset">

                        <RadioGroup
                            aria-label="Side"
                            name="tradeSide"
                            className="radioGroup"
                            value={this.state.tradeInfo.side}
                            onChange={this.handleSideChange}
                        >
                            <FormControlLabel value="Buy" control={<Radio color="primary" />} label="Buy" />
                            <FormControlLabel value="Sell" control={<Radio color="primary" />} label="Sell" />

                        </RadioGroup>
                    </FormControl>
                    <TextField
                        id="counterParty"
                        label="Counter Party"
                        select
                        className="tradeEditorTextField"
                        margin="normal"
                        value={this.state.tradeInfo.counterParty}
                        onChange={this.handleSelectionChange('counterParty')}
                        SelectProps={{

                            MenuProps: {
                                className: "selectMenu",
                            },
                        }}
                    >
                        {counterparties && counterparties.map(option => (
                            <MenuItem key={option.id} value={option.code}>
                                {option.code}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="price"
                        label="Price"
                        type="number"
                        className="tradeEditorTextField"
                        value={this.state.tradeInfo.price}
                        onChange={this.handleChange('price')}
                        margin="normal"
                    >
                    </TextField>
                    <TextField
                        id="quantity"
                        label="Quantity"
                        type="number"
                        className="tradeEditorTextField"
                        value={this.state.tradeInfo.quantity}
                        onChange={this.handleChange('quantity')}
                        margin="normal"
                    />
                    <TextField
                        id="location"
                        label="Location"
                        select
                        className="tradeEditorTextField"
                        margin="normal"
                        value={this.state.tradeInfo.location}
                        onChange={this.handleSelectionChange('location')}
                    >
                        {locations && locations.map(option => (
                            <MenuItem key={option.id} value={option.code}>
                                {option.code}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="currency"
                        label="Currency"
                        select
                        className="tradeEditorTextField"
                        margin="normal"
                        value={this.state.tradeInfo.currency}
                        onChange={this.handleSelectionChange('currency')}
                    >
                        {currencies && currencies.map(option => (
                            <MenuItem key={option.id} value={option.code}>
                                {option.code}
                            </MenuItem>
                        ))}
                    </TextField>


                    <div align="center">
                        <Button variant="contained"
                            className="editButtons"
                            onClick={this.handleClearClick}>
                            Clear
                            </Button>
                        <Button color="primary"
                            className="editButtons"
                            onClick={this.handleSaveClick}
                            variant="contained">
                            Save
                            </Button>
                    </div>
                </form>


                <Dialog
                    open={this.state.statusDialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Metallica - Trade Management"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           {this.props.saveStatus == 'success' && 
                            "Trade successfully saved."
                            }
                            {this.props.saveStatus == 'failed' && 
                            "Trade details failed to save."
                            }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            CLOSE
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        );
    }

}