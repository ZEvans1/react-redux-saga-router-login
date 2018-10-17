import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LoginForm}/>
    <Route exact path="/pageone" component={PageOne}/>
    <Route exact path="/pagetwo" component={PageTwo}/>
  </Switch>
)

export default Main;