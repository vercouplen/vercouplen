import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, Linking, View } from 'react-native';
import db from "../firebase/config";

class FriendsOfFriends extends React.Component {

  constructor(props) {
    super(props)
    this.getInviterName();
  }

  state = {
    stage: 'none',
    name: '',
    phone: '',
    inviterName: '',
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
          <Text>{this.state.inviterName} hat Dich zu einer Party am Freitag, 30. Oktober, eingeladen.</Text>
          <Text>Nimm an der Party teil und lerne neue Leute kennen:</Text>
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
        <Text>Die liebe Marissa fügt Dich zur Gruppe am 30. Oktober hinzu. Bis dann!</Text>
        <StatusBar style="auto" />
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});


export default FriendsOfFriends