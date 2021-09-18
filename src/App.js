import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import History from "./pages/History";

function App() {
  // returns component to user with given path
  return (
    <div className="App">
       <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/history" component={History}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
