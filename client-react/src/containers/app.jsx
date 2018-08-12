import React, {Component} from 'react';
import DetailLayout from '../components/detaillayout/detaillayout';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
class App extends Component {

  render () {
    const theme = createMuiTheme({
      palette: {
        primary: blue,
        secondary: green,
      },
      status: {
        danger: 'orange',
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
          <div>
            <DetailLayout/>
          </div>
      </MuiThemeProvider>
    )
  }
}
export default App;