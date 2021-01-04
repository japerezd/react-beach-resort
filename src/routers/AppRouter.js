import React from 'react';
import { Error } from '../components/pages/Error';
import {Home} from '../components/pages/Home';
import {Rooms} from '../components/pages/Rooms';
import {SingleRoom} from '../components/pages/SingleRoom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router> 

        <Navbar />
  
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms" component={Rooms}/>
          <Route exact path="/rooms/:slug" component={SingleRoom}/>
          <Route component={Error}/>
  
         <Redirect to="/error"/>
        </Switch>
      </Router>
    )
}
