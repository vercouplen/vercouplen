import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {StyleSheet, Text, TextInput, View } from 'react-native';
import {db, analytics} from "../firebase/config";
import OurButton from './button';
import OurText from './text';

class Besties extends React.Component {
  state = {
    stage: 'none',
    name: '',
    phone: '',
  };


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

    db.collection("Besties").add({
      Name: friend.name,
      Phone: friend.phone
    })
    .then((docRef) => {
      console.log("document written with ID: ", docRef.id);
      this.setState({stage: 'added_number'});
      analytics.logEvent('registered_besties');
    })
    .catch((error) => {
      console.log("error adding doc", error);
    });


  }
  



  render() {
    if(this.state.stage == 'none') {
      return (
        <View>
          <OurText>Eine Freundin oder Freund hat Dich zu einem GetUsTogether Whatsappchat eingeladen.</OurText>
          <OurText>Lerne jetzt neue Freunde von Freunden aus Deiner Peer Group in Deiner Stadt kennen – wie auf einer Party. Keine Random Leute – Dein echtes Netzwerk.</OurText>
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
        <OurText>Klasse! GetUsTogether fügt Dich zusammen mit den – 15 – anderen Teilnhemern alle zur selben Zeit zur Whatsappgruppe hinzu.</OurText>
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

export default Besties