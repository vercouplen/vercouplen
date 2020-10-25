import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, Text, Linking, View, Pressable} from 'react-native';

class OurButton extends Component {
constructor(props) {
    super(props)
}
  render() {
      return (
        <View style={{margin: 15}}>
        <Pressable onPress={() => this.props.onPress()}>
        <View style={styles.button}>
        <Text style={{color: 'white', fontSize: 15, fontWeight: '800'}}>
        {this.props.label}
        </Text>
        </View>
        </Pressable>
        </View>
      );
    }
}

class OurButtonPlaceholder extends Component {
    constructor(props) {
        super(props)
    }
      render() {
          return (
            <View style={{margin: 15}}>
            <Pressable onPress={() => this.props.onPress()} disabled='true'>
            <View style={styles.button}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '800'}}>
            {this.props.label}
            </Text>
            </View>
            </Pressable>
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
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  });

export default OurButton
export {OurButton, OurButtonPlaceholder}


