import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput
  } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../actions/index';


class PeopleInvoloved extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            numberofPeople:null
        }
    }

    static navigationOptions = {
        title: 'Oneness',
        headerStyle: {
          backgroundColor: '#ebebeb'
        }
    }
    onChnage(text)
    {
        if(text)
        {
            this.setState({numberofPeople:text})
        }
    }
    onSubmitNumberOfPeople() {
        if(this.state.numberofPeople)
        {
            this.props.setNumberOfPeopleInvolved(this.state.numberofPeople)
            this.props.navigation.navigate('Involved');
        }
        else{
            this.setState({numberofPeople:null})
        }
    }
    render() {
        return (
            <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            Please Specify How many people were Involved
        </Text>
        <TextInput onChangeText={text=>this.onChnage(text)} value={this.state.numberofPeople} keyboardType='numeric' style={{ width:200,height: 40, borderColor: 'black', borderWidth: 2, alignSelf:"center"}}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity  style={styles.button} onPress={this.onSubmitNumberOfPeople.bind(this)} >
            <Text style={styles.buttonText}>Submit</Text>
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
      justifyContent: 'flex-end'
    }
  });

const mapStateToProps = state => {
    return { information: state }
}
export default connect(mapStateToProps, actions)(PeopleInvoloved);