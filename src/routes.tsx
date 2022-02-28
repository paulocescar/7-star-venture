import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Lista from './pages/home'
import Detalhes from './pages/detalhes'
export default function Newroutes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Lista}/>
                <Route path={'/detalhes'} component={Detalhes}/>
            </Switch>
        </BrowserRouter>
    )
}