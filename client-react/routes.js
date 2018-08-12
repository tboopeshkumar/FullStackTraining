import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './src/containers/app';
import About from './src/containers/About';
export default () => {
 return (
   <BrowserRouter history={history} >
   <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/detaillayout' component={App}/>
        <Route path='/about' component={About}/>
   </Switch>
   </BrowserRouter>
 )
}