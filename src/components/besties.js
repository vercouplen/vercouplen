import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {StyleSheet, Text, TextInput, View } from 'react-native';

class Besties extends React.Component {
  state = {
    toggleScreen: false,
  };

  render() {
    return (
        <View>
          <Text>Marissa hat dich zu ihrer Party am Freitag, 30. Oktober, eingeladen, damit du neue Leute kennenlernen kannst!</Text>
          <br/>
            <Text>Trag' deinen Namen und Whatsapp-Nummer ein, um an der Party teilzunehmen. </Text>
            <TextInput 
              placeholder="Whatsapp-Nummer" />
            <TextInput
              placeholder="Name"
            />
            <Text>Marissa fügt dich zur Whatsappgruppe hinzu, sobald die Party beginnt. Happy connecting!</Text>
          <StatusBar style="auto" />
        </View>
      );
  }
}
export default Besties