import Header from "./Components/Header"
// import Home from './Pages/Home/Home'
// import Company from './Pages/Company/Company'
import Projects from './Pages/Projects/Projects'

import Recruiting from './Pages/Recruiting/Recruiting'
// import Engineering from './Pages/Engineering/Engineering'
// import ExternalITDepartment from './Pages/Engineering/ExternalITDepartment'
// import SoftwareDevelopment from './Pages/Engineering/SoftwareDevelopment'
// import ECommerceShop from './Pages/Engineering/ECommerceShop'
// import RPA from './Pages/Engineering/RPA'

import Testimonials from './Pages/Testimonials/Testimonials'
import Imprint from './Pages/Imprint'
import Footer from './Components/Footer/Footer'
// import ErrorPage from "./Pages/ErrorPage"


import { lazy, Suspense } from 'react'
const Home = lazy(() => import(/* webpackChunkName: "HomeChunk" */ './Pages/Home/Home'))
const Company = lazy(() => import(/* webpackChunkName: "Company" */ './Pages/Company/Company'))
const Engineering = lazy(() => import(/* webpackChunkName: "Engineering" */ './Pages/Engineering/Engineering'))
const SoftwareDevelopment = lazy(() => import(/* webpackChunkName: "SoftwareDevelopment" */ './Pages/Engineering/SoftwareDevelopment'))
const ECommerceShop = lazy(() => import(/* webpackChunkName: "ECommerceShop" */ './Pages/Engineering/ECommerceShop'))
const RPA = lazy(() => import(/* webpackChunkName: "RPA" */ './Pages/Engineering/RPA'))
const ExternalITDepartment = lazy(() => import(/* webpackChunkName: "ExternalITDepartment" */ './Pages/Engineering/ExternalITDepartment'))
const ErrorPage = lazy(() => import(/* webpackChunkName: "ErrorPage" */ "./Pages/ErrorPage"))
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />

        <div>
          <Suspense fallback={<h1> Loading.. </h1>}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/engineering" component={Engineering} >
                <Route exact path="/engineering/externalITDepartment" component={ExternalITDepartment} ></Route>
                <Route exact path="/engineering/SoftwareDevelopment" component={SoftwareDevelopment} />
                <Route exact path="/engineering/ECommerceShop" component={ECommerceShop} />
                <Route exact path="/engineering/rpa" component={RPA} />
              </Route>
              <Route path="/recruiting" component={Recruiting}>
              </Route>
              <Route path="/company">
                <Company />
              </Route>
              <Route path="/testimonials">
                <Testimonials />
              </Route>
              <Route path="/imprint">
                <Imprint />
              </Route>
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router >
  )
}




