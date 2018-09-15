import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './tradeeditor.css';


export default class TradeEditor extends Component{

   
    constructor(props){
        super(props);
        this.defaultState ={
            sideValue: "Buy",
            counterParty : -1,
            commodity : -1,
            location : -1,
            price : 0,
            quantity : 0,
            tradeDate : new Date().toISOString().slice(0,10),
        }
        this.state = this.defaultState;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.selectedTrade){
            let newTradeDate = new Date(nextProps.selectedTrade.tradeDate).toISOString().slice(0,10);
            let newState = Object.assign({},nextProps,nextProps.selectedTrade,{tradeDate:newTradeDate},);
            console.log(newState);
            return newState;
         }
    }

    handleSideChange = event => {
        this.setState({...this.state, sideValue: event.target.value });
    };
    handleSelectionChange = name => event => {
        this.setState({...this.state,[name]: event.target.value});
      };
    handleChange = name => event => {
        this.setState({...this.state, [name]: event.target.value });
    };
    handleClearClick = event =>{
        this.setState({...this.state,...this.defaultState});
    }

    render(){
        const { commodities, counterparties, locations } =this.props;
        return(
            <div >
                    <div className="tradeEditorHeader">
                        <div className="tradeEditorHeaderContent">Trade Id {this.state._id}</div>
                    </div>

                    <form className="tradeEditorContainer">
                        <TextField
                            id="tradeDate"
                            label="Trade Date"
                            type="date"
                            value={this.state.tradeDate}
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
                            value ={this.state.commodity}
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
                                value={this.state.sideValue}
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
                            value ={this.state.counterParty}
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
                            value={this.state.price}
                            onChange={this.handleChange('price')}
                            margin="normal"
                        >
                        </TextField>
                        <TextField
                            id="quantity"
                            label="Quantity"
                            type="number"
                            className="tradeEditorTextField"
                            value={this.state.quantity}
                            onChange={this.handleChange('quantity')}
                            margin="normal"
                        />
                        <TextField
                            id="location"
                            label="Location"
                            select
                            className="tradeEditorTextField"
                            margin="normal"
                            value ={this.state.location}
                            onChange={this.handleSelectionChange('location')}
                        >
                         {locations && locations.map(option => (
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
                            variant="contained">
                                Save
                            </Button>
                         </div>
                    </form>
                </div>

        );
    }

}