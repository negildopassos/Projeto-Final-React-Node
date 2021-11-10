import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import EditCliente from './pages/EditCliente';
import AddCliente from './pages/AddCliente';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/edit/:id' component={EditCliente}/>
                <Route path='/add' component={AddCliente}/>
            </Switch>
        </BrowserRouter>
    );

}
