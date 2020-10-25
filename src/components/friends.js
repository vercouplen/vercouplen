import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, TextInput, Text, Linking, View, TouchableOpacity} from 'react-native';
import db from "../firebase/config";
import OurButton from './button';
import OurText from './text';

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

  handleNameChange = (text) => {
    this.setState({name: text});
  }

  handlePhoneChange = (text) => {
    this.setState({phone: text});
  }

  handleSubmit = () => {

    if(this.state.name == '' || this.state.phone == '') {
      return;
    }

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
          <OurText>Marissa Rimmele hat dich zu ihrer Party am Freitag, 30. Oktober, eingeladen.</OurText>
          <OurText>Nimm teil und lerne ihre besten Freunde kennen:</OurText>
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
        <OurText>Marissa fügt Dich zur Gruppe am 30. Oktober hinzu.</OurText>
        <View style={{ marginTop: 10}}>
        <OurText>Bringe deine Freunde zur Party mit – via Whatsapp!</OurText>
        </View>
        <OurButton onPress={() => this.invite_whatsapp('https://wa.me/?text=Du%20solltest%20mal%20wieder%20neue%20Leute%20kennenlernen%20!%20Meld%20Dich%20mal%20an:%20https://getustogether.netlify.app/friendsoffriend/'+this.state.submittedID, 'added_number')} label="Freunde einladen"/>
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
    margin: 15,
    width: 370
  }
});


export default Friends