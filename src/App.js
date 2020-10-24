import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Linking, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lade Deine drei besten Freunde zur Party via Whatsapp ein:</Text>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://wa.me/?text=Du%20solltest%20mal%20wieder%20neue%20Leute%20kennenlernen%20!%20Meld%20Dich%20mal%20an:%20https://getustogether.netlify.app/besties')}>
  Freunde einladen
  </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
