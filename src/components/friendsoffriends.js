import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, Linking, View } from 'react-native';
import db from "../firebase/config";

class FriendsOfFriends extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    stage: 'none',
    name: '',
    phone: '',
  }


  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const friend = {
      name: this.state.name,
      phone: this.state.phone,
    }

    db.collection("Friends").add({
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
  
  render() {
    if(this.state.stage == 'none') {
      return (
        <View>
          <Text>Du wurdest zu einer Party am Freitag, 30. Oktober, eingeladen.</Text>
          <Text>Lerne neue Leute kennen:</Text>
          <form onSubmit = {this.handleSubmit}>
            <label>
              Name
              <input type="text" name={this.state.name} onChange={this.handleNameChange}/>
            </label>
            <label>
              Whatsapp-Nummer
              <input type="text" phone={this.state.phone} onChange={this.handlePhoneChange}/>
            </label>
            <button type="submit">Teilnehmen</button>
          </form>
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
export default FriendsOfFriends