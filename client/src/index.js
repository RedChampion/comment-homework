import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//imports everything included in the App.js page.  

//renders everything from the App.js onto the page.
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
