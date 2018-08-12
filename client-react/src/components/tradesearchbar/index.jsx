import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from "@material-ui/core/FormGroup"; 

import Checkbox from '@material-ui/core/Checkbox';
import './tradesearchbar.css';

export default class TradeSearchBar extends Component {

    constructor(props) {
        super(props);
        this.defaultState = {
            tradeDateFrom: new Date().toISOString().slice(0, 10),
            tradeDateTo: new Date().toISOString().slice(0, 10),
            counterParty : -1,
            commodity : -1,
            location : -1,
        }
        this.state = this.defaultState;
    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.value });
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
    handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    render() {

        const { commodities, counterparties, locations } =this.props;
        return (
            <form className="tradeSearchBarRoot">
                <TextField
                    id="tradeDateFrom"
                    label="Trade Date From"
                    type="date"
                    value={this.state.tradeDateFrom}
                    className="searchBarTextField"
                    margin="normal"
                    onChange={this.handleChange('tradeDateFrom')}
                />

                <TextField
                    id="tradeDateTo"
                    label="Trade Date To"
                    type="date"
                    value={this.state.tradeDateTo}
                    className="searchBarTextField"
                    margin="normal"
                    onChange={this.handleChange('tradeDateTo')}
                />

                    <span className="sideCheckboxLabel">Side</span>

                    <FormControlLabel className="sideCheckboxFormControlLabel"
                        control={
                            <Checkbox
                            checked={this.state.buy}
                            onChange={this.handleCheckboxChange('buy')}
                            value="buy"
                            color="primary"
                            />
                        }
                        label="Buy"
                        />

                        <FormControlLabel className="sideCheckboxFormControlLabel"
                        control={
                            <Checkbox
                            checked={this.state.sell}
                            onChange={this.handleCheckboxChange('sell')}
                            value="buy"
                            color="primary"
                            />
                        }
                        label="Sell"
                        />
                    

                 <TextField
                            id="commodity"
                            label="Commodity"
                            select
                            className="searchBarTextField"
                            margin="normal"
                            value ={this.state.commodity}
                            onChange={this.handleSelectionChange('commodity')}
                        >
                        {commodities && commodities.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                            {option.code}
                            </MenuItem>
                        ))}
                        </TextField>

                <TextField
                    id="counterParty"
                    label="Counter Party"
                    select
                    className="searchBarTextField"
                    margin="normal"
                    value={this.state.counterParty}
                    onChange={this.handleSelectionChange('counterParty')}
                    SelectProps={{
                        MenuProps: {
                            className: "selectMenu",
                        },
                    }}
                >
                    {counterparties && counterparties.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.code}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                            id="location"
                            label="Location"
                            select
                            className="searchBarTextField"
                            margin="normal"
                            value ={this.state.location}
                            onChange={this.handleSelectionChange('location')}
                        >
                         {locations && locations.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                            {option.code}
                            </MenuItem>
                        ))}
                        </TextField>

                         <Button variant="contained" 
                                className="editButtons"
                                onClick={this.handleClearClick}>
                                Clear
                            </Button>
                        <Button color="primary" 
                            className="editButtons"
                            variant="contained">
                                Search
                            </Button>
            </form>


        );
    }

}