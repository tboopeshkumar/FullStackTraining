import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import App from './app';
function WithTheme(props) {
  const { theme } = props;
  const primaryText = theme.palette.text.primary;
  const primaryColor = theme.palette.primary.main;

  const styles = {
    primaryText: {
      backgroundColor: theme.palette.background.default,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: primaryText,
    },
    primaryColor: {
      backgroundColor: `#2196f3`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: theme.palette.common.white,
    },
  };

  return (
   <App/>
  );
}

WithTheme.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(WithTheme); 