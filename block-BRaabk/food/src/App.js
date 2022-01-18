import React from 'react';
import Navbar from './components/Navbar'
import Food from './components/Food'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/all"><Food key="all" category="all" /></Route>
          <Route exact path="/breakfast"><Food key="breakfast" category="breakfast" /></Route>
          <Route exact path="/lunch"><Food key="lunch" category="lunch" /></Route>
          <Route exact path="/shakes"><Food key="shakes" category="shakes" /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
