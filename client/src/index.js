import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import loadUser from "./components/auth/loadUser";

loadUser();

ReactDOM.render(<App />, document.getElementById("root"));
