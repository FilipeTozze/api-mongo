import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Main from './components/Main';
import Client from './components/Client';
import DetailClient from "./components/DetailClient";
import Swagger from "./components/Swagger";

const Routes = () => (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path="client" component={Client} />
            <Route path="detail/:id" component={DetailClient} />
            <Route path="swagger" component={Swagger} />
        </Route>
        <Redirect from="*" to="/client" />
    </Router>
)

export default Routes;