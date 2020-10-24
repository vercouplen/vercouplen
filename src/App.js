import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';

import Besties from './components/besties';
import Friends from './components/friends';
import FriendsOfFriends from './components/friendsoffriends';
import Facilitators from './components/facilitators';

import { Router, Switch, Route } from './routing/routing';

class App extends Component {
  render() {

      return (
      <View style={styles.container}>
        <Text style={styles.titleText}>VERCOUPLEN</Text>
        <Router>
          <Switch>
            <Route exact path="/" component={Facilitators} />
            <Route path="/besties" component={Besties} />
            <Route path="/friends" component={Friends}/>
            <Route exact path="/friendsoffriends" component={FriendsOfFriends}/>
            <Route path="/friendsoffriends/:friendid" component={FriendsOfFriends}/>
            </Switch>
        </Router>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 25
  }
});

export default App