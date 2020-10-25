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
      return (
      <View style={styles.base}>
      <View style={styles.container}>
        <OurText style={styles.titleText}>GetUsTogether</OurText>
      </View>
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route exact path="/" component={Facilitators} />
            <Route path="/b" component={Besties} />
            <Route path="/f" component={Friends}/>
            <Route exact path="/ff" component={FriendsOfFriends}/>
            <Route path="/ff/:friendid" component={FriendsOfFriends}/>
            </Switch>
        </Router>
      </View>
      <View style={styles.container}>
      <OurText style={styles.footerText}>Copyright 2020 GetUsTogether{"\n"}Stefan Bielmeier{"\n"}Christian Hülsemeyer</OurText>
      </View>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  container: {
    font: 'Inter',
    marginTop: 50,
    margin: 0,
    paddingTop: 20,
    backgroundColor: '#F5F5F5',
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 25,
    flex: 1,
    marginTop: 30,
    height: 60,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 15,
    fontWeight: "light",
    margin: 25
  }
});

export default App