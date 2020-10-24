import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {StyleSheet, Text, TextInput, View } from 'react-native';

class Besties extends React.Component {
  state = {
    stage: 'none'
  };

  render() {
    if(this.state.stage == 'none') {
      return (
        <View>
          <Text>Marissa hat dich zu ihrer Party am Freitag, 30. Oktober, eingeladen!</Text>
          <Text>Lerne Marissas erweiterten Freundeskreis kennen:</Text>
          <TextInput 
                placeholder="Whatsapp-Nummer" 
                />
          <TextInput
                placeholder="Name"
                />
          {console.log(this.state.stage)}
          <Text style={{color: 'blue'}} onPress={() => this.setState({stage: 'added_number'})}>Teilnehmen</Text>
          {console.log(this.state.stage)}
          <StatusBar style="auto" />
        </View>
      );
    }
    
    if(this.state.stage == 'added_number') {
      return(
      <View>
        <Text>Marissa fügt Dich am 30. Oktober zur Gruppe hinzu. Bis dann!</Text>
        <StatusBar style="auto" />
      </View>
      )
    }
  }
}
export default Besties