import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, Linking, View } from 'react-native';

class Facilitators extends React.Component {
  state = {
    stage: 0
  }

  render() {
    return (
    <View>
      <Text>Lade Deine drei besten Freunde zur Party via Whatsapp ein:</Text>
      <Text style={{color: 'blue'}} onPress={invite_whatsapp}>Freunde einladen</Text>
      <StatusBar style="auto" />
    </View>
      );
  }
  invite_whatsapp() {
    Linking.openURL('https://wa.me/?text=Du%20solltest%20mal%20wieder%20neue%20Leute%20kennenlernen%20!%20Meld%20Dich%20mal%20an:%20https://getustogether.netlify.app/besties')
  }

}
export default Facilitators