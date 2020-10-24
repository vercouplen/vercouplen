import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, Linking, View, TouchableOpacity, Platform} from 'react-native';
import db from "../firebase/config";

class Friends extends React.Component {
  state = {
    stage: 'none',
    name: '',
    phone: '',
    submittedID: '',
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
      this.setState({submittedID: docRef.id});
    })
    .catch((error) => {
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
        <Text>Marissa fügt Dich zur Gruppe am 30. Oktober hinzu.</Text>
        <View style={{ marginTop: 10}}>
        <Text>Bringe deine Freunde zur Party mit – via Whatsapp!</Text>
        </View>
        <TouchableOpacity onPress={() => this.invite_whatsapp('https://wa.me/?text=Du%20solltest%20mal%20wieder%20neue%20Leute%20kennenlernen%20!%20Meld%20Dich%20mal%20an:%20https://getustogether.netlify.app/friendsoffriend/'+this.state.submittedID, 'added_number')}>
          <View
            style={{
              backgroundColor: '#195e83',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 15,
              marginTop: 25,
              width: 370
            }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '800'}}>
              Freunde einladen
            </Text>
          </View>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      )
    }
  }
}
export default Friends