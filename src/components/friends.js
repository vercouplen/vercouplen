import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, TextInput, Text, Linking, View } from 'react-native';

class Friends extends React.Component {
  state = {
    stage: 'none'
  }

  invite_whatsapp(url, stage) {
    if(Platform.OS == 'web'){
      window.open(url, '_blank');
    } else {
      Linking.openURL(url)
    }
    this.setState({stage: stage})
  }
  
  render() {
    if(this.state.stage == 'none') {
      return (
        <View>
          <Text>Marissa Rimmele hat dich zu ihrer Party am Freitag, 30. Oktober, eingeladen.</Text>
          <Text>Lerne ihre besten Freunde kennen:</Text>
          <TextInput 
                placeholder="Whatsapp-Nummer" 
                />
          <TextInput
                placeholder="Name"
                />
          <Text style={{color: 'blue'}} onPress={() => this.setState({stage: 'added_number'})}>Teilnehmen</Text>
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