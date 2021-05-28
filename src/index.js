import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'



import {LogIn} from './components'


const App = () => {

  return(
    <Router>
      <Route exact path='/login'>
        <LogIn />

      </Route>
      



    </Router>

)}




ReactDOM.render(
  <App />,
  document.getElementById('app')
)

