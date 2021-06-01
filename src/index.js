import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {LogIn} from './components'


const App = () => {

  return(
    <Router>
      <Route exact path="/login" component={LogIn}>
      
    </Route>

      {/* <Route exact path="/">
        <h1>Hello World</h1>
      </Route>
       */}



    </Router>

)}




ReactDOM.render(
  <App />,
  document.getElementById('app')
)

