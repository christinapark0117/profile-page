import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import HomeContainer from "./Home/HomeContainer";
import AboutMe from "./AboutMe/AboutMe";
import ProjectContainer from "./Project/ProjectContainer";
import BreadIsGold from "./Project/BreadIsGold";
import BurgerDiner from "./Project/BurgerDiner";
import AllensCabinets from "./Project/AllensCabinets";


function App() {
  return (
    <div className="App" >
      <Navbar/>

      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/project' component={ProjectContainer} />

        <Route exact path='/project/breadisgold' component={BreadIsGold} />
        <Route exact path='/project/burgerdiner' component={BurgerDiner} />
        <Route exact path='/project/allenscabinets' component={AllensCabinets} />
      </Switch>
    </div>
  );
}

export default App;
