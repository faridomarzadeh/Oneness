import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class Welcome extends Component {
  next = () => {
    this.props.navigation.navigate('RoleSelect');
  }
  static navigationOptions = {
    title: 'Oneness',
    headerStyle: {
      backgroundColor: '#ebebeb'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#ebebeb"
          />
          <Text style={styles.welcome}>
            Welcome to Oneness!
        </Text>
          <Text style={styles.instructions}>
            An application for capturing Multicaltural situations.
            To continue, please press Next!
        </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.next.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  welcomeContainer: {
    flex: 6,
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  button: {
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#78D2F7'
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 10
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});