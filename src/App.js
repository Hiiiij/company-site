import './App.css';
import React from "react";
import Header from "./Components/Header"
import Home from './Pages/Home'
import Company from './Pages/Company/Company'
import Recruiting from './Pages/Recruiting'
import Engineering from './Pages/Engineering'
import Projects from './Pages/Projects'
import ExternalITDepartment from './Pages/ExternalITDepartment'
import SoftwareDevelopment from './Pages/SoftwareDevelopment'
import ECommerceShop from './Pages/ECommerceShop'

import RPA from './Pages/RPA'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/recruiting">
            <Recruiting />
          </Route>
          <Route path="/engineering">
            <Engineering />
          </Route>
          <Route exact path="/engineering/externalITDepartment">
            <ExternalITDepartment />
          </Route>
          <Route path="/engineering/software">
            <SoftwareDevelopment />
          </Route>
          <Route path="/engineering/ecommerce">
            <ECommerceShop />
          </Route>
          <Route path="/engineering/it">
            <RPA />
          </Route>
          <Route path="/rpa">
            <RPA />
          </Route>
          <Route path="/company">
            <Company />
          </Route>

        </Switch>

      </div>
    </Router>
  )
}
