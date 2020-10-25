import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Platform, TouchableOpacity, StyleSheet, Text, Linking, View, Button } from 'react-native';
import OurButton from './button';
import OurText from './text';

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
        <View style={styles.padding}>
        <View style={{ marginTop: 10}}>
        <OurText style={styles.titleText}>Schritt 1</OurText>
        </View>
        <View style={{ marginTop: 10}}>
        <OurText>Lade Deine drei besten Freunde zur Party via Whatsapp ein:</OurText>
        </View>
        <OurButton onPress={() => this.invite_whatsapp('https://wa.me/?text=Du%20solltest%20mal%20wieder%20neue%20Leute%20kennenlernen%20!%20Meld%20Dich%20mal%20an:%20https://getustogether.netlify.app/b', 'besties_invited')} label="Freunde einladen"/>
        <StatusBar style="auto" />
      </View>
      );
    }
    if(this.state.stage == 'besties_invited') {
      
      return (
        <View style={styles.padding}>
        <View style={{ marginTop: 10}}>
        <OurText style={styles.titleText}>Schritt 2</OurText>
        </View>
        <View style={{ marginTop: 10}}>
        <OurText>Lade weitere Freunde und Bekannte ein, die deine besten Freunde kennenlernen sollten:</OurText>
        </View>
        <OurButton onPress={() => this.invite_whatsapp('https://wa.me/?text=Hey%2C%20lange%20nicht%20gequatscht!%20Ich%20schmeiß%20ne%20kleine%20Virtuelle%20Kennenlernparty%2C%20hast%20du%20Lust%20ein%20paar%20neue%20Leute%20kennenzulernen%3F%20%3A%29%20https://getustogether.netlify.com/f', 'friends_invited')} label="Freunde einladen"/>
        <StatusBar style="auto" />
        </View>
      );

    }
    if(this.state.stage == 'friends_invited') {
      return (
        <View style={styles.padding}>
        <OurText style={styles.titleText}>Fertig</OurText>
        <OurText>Am 30. Oktober laden wir alle Teilnehmer in eine Whatsappgruppe ein.{"\n"}
          Bei Fragen bitte Stefan & Chrisi schreiben.</OurText>
        <StatusBar style="auto" />
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  padding: {
    padding: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Facilitators