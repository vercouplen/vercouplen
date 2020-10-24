import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';

import Besties from './components/besties';
import Friends from './components/friends';
import Facilitators from './components/facilitators';

import { Router, Switch, Route } from './routing/routing';

import db from "./firebase/firebase.js";


class App extends Component {
  render() {
      const database = db;

      return (
      <View style={styles.container}>
        <h1>Vercouplen</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={Facilitators} />
            <Route path="/besties" component={Besties} />
            <Route path="/friends" render={(database) => <Friends {...database}/>}/>          
            </Switch>
        </Router>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '50px',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App