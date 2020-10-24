import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, Linking, View } from 'react-native';

class Friends extends React.Component {
  render() {
    return (
        <View>
          <Text><b>Freund</b></Text>
          <Text>Lade Deine drei besten Freunde zur Party via Whatsapp ein:</Text>
          <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://wa.me/?text=Hey,%20lange%20nicht%20gequatscht!%20Ich%20schmeiß%20ne%20kleine%20Virtuelle%20Kennenlernparty%2C%20hast%20du%20Lust%20ein%20paar%20neue%20Leute%20kennenzulernen%3F%20%3A%29%20https://getustogether.netlify.com/friends')}>
      Freunde einladen
      </Text>
          <StatusBar style="auto" />
        </View>
      );
  }
}
export default Friends