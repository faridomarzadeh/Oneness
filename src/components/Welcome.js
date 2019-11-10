import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native';

export default class Welcome extends Component {
    next=()=>{
        this.props.navigation.navigate('RoleSelect');
    }
    static navigationOptions = {
        title: 'Oneness',
        headerStyle: {
          backgroundColor: '#4F6D7A',
          alignItems:'center'
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        />
        <Text style={styles.welcome}>
          Welcome to Oneness!
        </Text>
        <Text style={styles.instructions}>
         An application for capturing Multicaltural situations.
         To continue, please press Next!
        </Text>
        <TouchableHighlight onPress={this.next.bind(this)} style={styles.welcome}>
            <Text>Next</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});