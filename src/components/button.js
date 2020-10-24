import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, Linking, View, TouchableOpacity} from 'react-native';

class OurButton extends Component {
constructor(props) {
    super(props)
}
  render() {
      return (
        <View style={{margin: 15}}>
        <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={styles.button}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: '800'}}>
        {this.props.label}
        </Text>
        </View>
        </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#195e83',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      padding: 15,
      marginTop: 0,
      width: 370
    }
  });

export default OurButton


