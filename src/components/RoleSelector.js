import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
  } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../actions/index';


class RoleSelector extends Component {
    constructor(props)
    {
        super(props);
        this.state={

        }
    }

    static navigationOptions = {
        title: 'Oneness',
        headerStyle: {
          backgroundColor: '#ebebeb'
        }
    }

    onSelectRole=(role)=>{
      this.props.setRole(role);
      this.props.navigation.navigate('DemographicInformation');
    }
    render() {
        return (
            <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            Please Indicate your role in the multicultural event that took place.
        </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity  style={styles.button} onPress={()=>this.onSelectRole('user')}>
            <Text style={styles.buttonText}>User</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.button,styles.buttonGreen]} onPress={()=>this.onSelectRole('observer')} >
            <Text style={styles.buttonText}>Observer</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.button,styles.buttonYellow]} >
            <Text style={styles.buttonText}>Admin</Text>
          </TouchableOpacity>
        </View>
      </View>
        )
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
      flex: 1,
      justifyContent: "flex-end"
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'black',
    },
    button: {
      alignSelf: 'stretch',
      width: Dimensions.get('window').width/1.2,
      height: 50,
      backgroundColor: '#78D2F7',
      marginVertical:10
    },
    buttonGreen:{
        backgroundColor: '#79db7d'
    },
    buttonYellow:{
        backgroundColor:'#f8fdbf'
    },
    buttonText: {
      fontSize: 20,
      textAlign: "center",
      paddingTop: 10
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-start'
    }
  });

const mapStateToProps = state => {
    return { information: state }
}
export default connect(mapStateToProps, actions)(RoleSelector);