import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, Linking, View } from 'react-native';
import {db, analytics} from "../firebase/config";
import OurText from './text';
import OurButton from './button';

class FriendsOfFriends extends React.Component {

  constructor(props) {
    super(props)
    this.getInviterName();
  }

  state = {
    stage: 'none',
    name: '',
    phone: '',
    inviterName: 'Unbekannt',
  }


  handleNameChange = (text) => {
    this.setState({name: text});
  }

  handlePhoneChange = (text) => {
    this.setState({phone: text});
  }

  handleSubmit = (event) => {
    if(this.state.name == '' || this.state.phone == '') {
      return;
    }
    const friend = {
      name: this.state.name,
      phone: this.state.phone,
    }

    db.collection("FriendsOfFriends").add({
      Name: friend.name,
      Phone: friend.phone
    })
    .then((docRef) => {
      console.log("document written with ID: ", docRef.id);
      this.setState({stage: 'added_number'});
      analytics.logEvent('registered_friendsoffriends');
    })
    .catch((error) => {
      console.log("error adding doc", error);
    });


  }

  getInviterName = () => {
    var inviterID = this.props.match.params.friendid;
    var docRef = db.collection("Friends").doc(inviterID);
    docRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({inviterName: doc.data().Name})
        console.log("successfully added friend ", doc.data().Name)
      }
      else {
        console.log("no such Friend existing")
      }
    })
  }
  
  render() {
    if(this.state.stage == 'none') {
      return (
        <View>
          <OurText>{this.state.inviterName} hat Dich zu einer Party am Freitag, 30. Oktober, eingeladen.</OurText>
          <OurText>Nimm an der Party teil und lerne neue Leute kennen:</OurText>
          <TextInput
            onChangeText={(text) => this.handleNameChange(text)}
            placeholder="Name"
            value={this.state.name}
            style={styles.input}
          ></TextInput>
          <TextInput
            onChangeText={(text) => this.handlePhoneChange(text)}
            placeholder="Phone Number"
            value={this.state.phone}
            style={styles.input}
          ></TextInput>
        <OurButton onPress={() => this.handleSubmit()} label="Teilnehmen"/>
          <StatusBar style="auto" />
        </View>
      );
    }
    
    if(this.state.stage == 'added_number') {
      return(
      <View>
        <OurText>Die liebe Marissa fügt Dich zur Gruppe am 30. Oktober hinzu. Bis dann!</OurText>
        <StatusBar style="auto" />
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%'
  }
});


export default FriendsOfFriends