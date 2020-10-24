import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, Linking, View } from 'react-native';


class Friends extends React.Component {
  state = {
    stage: 'none',
    name: '',
    phone: '',
  }

  invite_whatsapp(url, stage) {
    if(Platform.OS == 'web'){
      window.open(url, '_blank');
    } else {
      Linking.openURL(url)
    }
    this.setState({stage: stage})
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  hanldePhoneChange= (event) => {
    this.setState({phone: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const friend = {
      name: this.state.name,
      phone: this.state.phone,
    }
    console.log(friend);

    var db = this.props.firebase.firestore();

    db.collection("friends").add({
      Name: friend.name,
      Phone: friend.phone
    })
    .then(function (docRef) {
      console.log("document written with ID: ", docRef.id);
      this.setState({stage: "added_number"})
    })
    .catch(function (error) {
      console.log("error adding doc", error);
    });


  }
  
  render() {
    if(this.state.stage == 'none') {
      return (
        <View>
          <Text>Marissa Rimmele hat dich zu ihrer Party am Freitag, 30. Oktober, eingeladen.</Text>
          <Text>Lerne ihre besten Freunde kennen:</Text>
          <form onSubmit = {this.handleSubmit}>
            <label>
              Name
              <input type="text" name={this.state.name} onChange={this.handleNameChange}/>
            </label>
            <label>
              Whatsapp-Nummer
              <input type="text" phone={this.state.phone} onChange={this.hanldePhoneChange}/>
            </label>
            <button type="submit">Teilnehmen</button>
          </form>
        </View>
      );
    }
    
    if(this.state.stage == 'added_number') {
      return(
      <View>
        <Text>Marissa fügt Dich zur Gruppe am 30. Oktober hinzu. Bis dann!</Text>
      </View>
      )
    }
  }
}
export default Friends