import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AboutUs from "./AboutUs";
import Nav from "./utils/Nav";
import Footer from "./utils/Footer";
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Nav />
      <Route path="/" exact component={App} />
      <Route path="/about" exact component={AboutUs} />
      <Footer />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
