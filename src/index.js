// src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import Besties from './components/besties'
import Friends from './components/friends'
import Facilitators from './components/facilitators'

import { BrowserRouter as Router, Route } from 'react-router-dom';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Facilitators} />
        <Route path="/besties" component={Besties} />
        <Route path="/friends" component={Friends} />
      </div>
    </Router>
  )

ReactDom.render(routing, document.getElementById("root"));