import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Platform, StyleSheet, Text, Linking, View } from 'react-native';

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
    if(this.state.stage === 'none') {
      return (
        <View>
        <Text>Lade Deine drei besten Freunde zur Party via Whatsapp ein:</Text>
        <Text style={{color: 'blue'}} onPress={() => this.invite_whatsapp('https://wa.me/?text=Du%20solltest%20mal%20wieder%20neue%20Leute%20kennenlernen%20!%20Meld%20Dich%20mal%20an:%20https://getustogether.netlify.app/besties', 'besties_invited')}>Freunde einladen</Text>
        <StatusBar style="auto" />
      </View>
      );
    }
    if(this.state.stage === 'besties_invited') {
      return (
        <View>
        <Text>Lade weitere Freunde und Bekannte ein, die deine Freunde kennenlernen können</Text>
        <Text style={{color: 'blue'}} onPress={() => this.invite_whatsapp('https://wa.me/?text=Hey,%20lange%20nicht%20gequatscht!%20Ich%20schmeiß%20ne%20kleine%20Virtuelle%20Kennenlernparty%2C%20hast%20du%20Lust%20ein%20paar%20neue%20Leute%20kennenzulernen%3F%20%3A%29%20https://getustogether.netlify.com/friends', 'friends_invited')}>Freunde einladen</Text>
        <StatusBar style="auto" />
        </View>
      );

    }
    if(this.state.stage === 'friends_invited') {
      return (
        <View>
        <Text>Danke! Am 30. Oktober laden wir alle Teilnehmer auf in eine Whatsappgruppe ein, damit ihr Euch alle kennenlernen könnt. Bei Fragen bitte Stefan & Chrisi schreiben.</Text>
        <StatusBar style="auto" />
        </View>
      );
    }

  }


}
export default Facilitators