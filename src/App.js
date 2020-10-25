import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';

import Besties from './components/besties';
import Friends from './components/friends';
import FriendsOfFriends from './components/friendsoffriends';
import Facilitators from './components/facilitators';
import OurText from './components/text';

import { Router, Switch, Route } from './routing/routing';

class App extends Component {
  render() {
      console.log(styles.titleText)
      return (
      <View>
      <View style={styles.container}>
        <OurText style={styles.titleText}>VERCOUPLEN</OurText>
      </View>
      <View style={styles.container}>
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
      <View style={styles.container}>
        <OurText style={styles.footerText}>Copyright 2020 Stefan Bielmeier | Christian Hülsemeyer</OurText>
      </View>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    font: 'Inter',
    marginTop: 50,
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 25
  },
  footerText: {
    fontSize: 15,
    fontWeight: "light",
    margin: 25
  }
});

export default App