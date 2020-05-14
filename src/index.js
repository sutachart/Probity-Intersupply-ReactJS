import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./menu/Home";
import Footer from "./menu/Footer";
import Service from "./menu/Service";
import AboutUs from "./menu/AboutUs";
import Contact from "./menu/Contact";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("home")
);

ReactDOM.render(
  <React.StrictMode>
    <Service />
  </React.StrictMode>,
  document.getElementById("service")
);

ReactDOM.render(
  <React.StrictMode>
    <AboutUs />
  </React.StrictMode>,
  document.getElementById("aboutus")
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById("contact")
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById("footer")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
