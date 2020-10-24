// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Besties from './besties'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/besties" component={Besties} />
      </div>
    </Router>
  )

ReactDom.render(routing, document.getElementById("root"));