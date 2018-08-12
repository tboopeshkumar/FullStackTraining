import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from '../../containers/about';
import TradeDetails from '../tradedetails/tradedetails';
import './detaillayout.css';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class DetailLayout extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="sticky">
        <div className="tradeAppBarRoot">
          <Tabs className="tradeAppBarTabs" value={value} onChange={this.handleChange}>
            <Tab label="TRADES" component={Link} to="/detaillayout/trades"/>
            <Tab label="TRANSFERS" component={Link} to="/detaillayout/transfers"/>
            <Tab label="TRANSPORTS" component={Link} to="/detaillayout/transports"/>
          </Tabs>
          <div className="tradeAppBarUserIcon">
            <span>User Name</span>
            <IconButton color="inherit" align="right">
                <AccountCircle />
            </IconButton>
          </div>
         
          </div>
        </AppBar>
        <Switch>
          <Route path='/detaillayout/trades' component={TradeDetails}/>
          <Route path='/detaillayout/transfers' component={About}/>
          <Route path='/detaillayout/transports' component={About}/>
        </Switch>
      </div>
    );
  }
}

DetailLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailLayout);
