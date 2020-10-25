import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class OurText extends Component {
  constructor(props) {
      super(props)
  }
  
  render() {
      const {style, ...rest} = this.props;
      let style_flattend = StyleSheet.flatten(style)
      let text_flattend = StyleSheet.flatten(styles.text)
      return (
        <Text style={[text_flattend, style_flattend]}>
          {this.props.children}
        </Text>
      );
    }
}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Inter',
    }
  });

export default OurText


