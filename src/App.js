import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Home from './HomPage/Home';
import ReadMore from './ReadMore/ReadMore';
import { Switch, Route } from 'react-router-dom';
import Default from './Defaut';
import Articles from './Articles/Articles';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/articles' component={Articles}></Route>
        <Route exact path='/articles/:publishedAt' component={ReadMore}></Route>
        <Route component={Default}></Route>
      </Switch>
    </div>
  );
}

export default App;
