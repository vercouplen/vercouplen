import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Platform, TouchableOpacity, StyleSheet, Text, Linking, View, Button } from 'react-native';

class Facilitators extends React.Component {
  state = {
    stage: 'none'
  }

  constructor(props) {
    super(props)
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
        <h3><b>Schritt 1</b></h3>
        <Text>Lade Deine drei besten Freunde zur Party via Whatsapp ein:</Text>
        <TouchableOpacity onPress={() => this.invite_whatsapp('https://wa.me/?text=Du%20solltest%20mal%20wieder%20neue%20Leute%20kennenlernen%20!%20Meld%20Dich%20mal%20an:%20https://getustogether.netlify.app/besties', 'besties_invited')}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 15,
              width: '50%'
            }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '800'}}>
              Freunde einladen
            </Text>
          </View>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      );
    }
    if(this.state.stage == 'besties_invited') {
      
      return (
        <View>
        <Text>Lade weitere Freunde und Bekannte ein, die deine besten Freunde kennenlernen sollten</Text>
        <TouchableOpacity onPress={() => this.invite_whatsapp('https://wa.me/?text=Hey,%20lange%20nicht%20gequatscht!%20Ich%20schmeiß%20ne%20kleine%20Virtuelle%20Kennenlernparty%2C%20hast%20du%20Lust%20ein%20paar%20neue%20Leute%20kennenzulernen%3F%20%3A%29%20https://getustogether.netlify.com/friends', 'friends_invited')}>
          <View
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 15,
              width: '50%'
            }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '800'}}>
              Freunde einladen
            </Text>
          </View>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
      );

    }
    if(this.state.stage == 'friends_invited') {
      return (
        <View>
        <h3>Fertig</h3>
        <Text>Am 30. Oktober laden wir alle Teilnehmer in eine Whatsappgruppe ein. 
          <br/>
          Bei Fragen bitte Stefan & Chrisi schreiben.</Text>
        <StatusBar style="auto" />
        </View>
      );
    }

  }


}
export default Facilitators