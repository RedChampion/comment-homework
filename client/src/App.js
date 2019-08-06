import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// importing react to allow the react package to work.  importing react router to enable react to route between different / links.  import the 'Home', 'No Match', and 'Saved' pages to allow them to render on the page.
function App() {
  // creating function that brings will be exported to the index.js
  return (
    //react-route tag that lets the page direct between different routes.
    <Router>
      <div>
        <Nav />
        {/* navbar that's imported from the navbar file. */}
        <Switch>
          {/* exact path lets the page direct to the correct place, depending on which route is hit.  without the exact path of the pages that are in the website, it directs to a 404. */}
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
// exports the functionality of the page, allowing it to be used in the index.js page.
export default App;
