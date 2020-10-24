import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';
import { Router, Switch, Route } from './routing/routing';

import Besties from './components/besties';
import Friends from './components/friends';
import Facilitators from './components/facilitators';

class App extends Component {
  render() {
      return (
      <View style={styles.container}>
        <Router>
        <Switch>
          <Route exact path="/" component={Facilitators} />
          <Route path="/besties" component={Besties} />
          <Route path="/friends" component={Friends} />
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