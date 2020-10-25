import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Platform, TouchableOpacity, StyleSheet, Text, Linking, View, Button } from 'react-native';
import { OurButton, OurButtonPlaceholder} from './button';
import OurText from './text';
import {isMobile} from 'react-device-detect';
import analytics from '../firebase/config';

class Facilitators extends React.Component {
  state = {
    stage: 'none'
  }

  constructor(props) {
    super(props)
  }
  
  invite_whatsapp(url, stage) {
    if(Platform.OS == 'web'){
      if(isMobile) {
        window.open(url, '_self');
      } else {
        window.open(url, '_blank');
      }
    } else {
      Linking.openURL(url)
    }
    analytics.logEvent('invitewhatsappclicked');
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
        <OurButton onPress={() => this.invite_whatsapp('https://wa.me/?text=Hey%2C+du+solltest+mal+wieder+neue+Leute+kennenlernen+%21+Ich+veranstalte+eine+kleine+Party+auf+WhatsApp+%3A%29+Meld+Dich+mal+an%3A+https%3A%2F%2Fgetustogether.netlify.app%2Fb', 'besties_invited')} label="Freunde einladen"/>
        <StatusBar style="auto" />

        <View style={[styles.hide]}>
        <View style={{ marginTop: 10}}>
        <OurText style={styles.titleText}>Schritt 2</OurText>
        </View>
        <View style={{ marginTop: 10}}>
        <OurText>Lade weitere Freunde und Bekannte ein, die deine besten Freunde kennenlernen sollten:</OurText>
        </View>
        <OurButtonPlaceholder onPress={() => this.invite_whatsapp('https://wa.me/?text=Na%2C+hoffe%2C+es+geht+dir+gut%21+%3A%29+Ich+schmei%C3%9F+ne+kleine+virtuelle+Party+zum+Kennenlernen+auf+WhatsApp%2C+hast+du+Lust+ein+paar+neue+Leute+kennenzulernen%3F+https%3A%2F%2Fgetustogether.netlify.com%2Ff', 'friends_invited')} label="Freunde einladen"/>
        <StatusBar style="auto" />
        </View>

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
        <OurButton onPress={() => this.invite_whatsapp('https://wa.me/?text=Na%2C+hoffe%2C+es+geht+dir+gut%21+%3A%29+Ich+schmei%C3%9F+ne+kleine+virtuelle+Party+zum+Kennenlernen+auf+WhatsApp%2C+hast+du+Lust+ein+paar+neue+Leute+kennenzulernen%3F+https%3A%2F%2Fgetustogether.netlify.com%2Ff', 'friends_invited')} label="Freunde einladen"/>
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
  hide: {
    opacity: 0.5
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Facilitators