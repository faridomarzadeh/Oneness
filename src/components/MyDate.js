import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import * as actions from '../actions/index';

import  DatePicker from 'react-native-datepicker';

class MyDate extends Component {
    constructor(props)
    {
        super(props);
        this.state = {date:"2016-05-15"}
    }

    static navigationOptions = {
      title: 'Oneness',
      headerStyle: {
        backgroundColor: '#ebebeb'
      }
    }

    onSubmit(){
      this.props.navigation.navigate('EventHappened');
    }
    render(){
        return(
          <View style={styles.container}>
            <View style={styles.welcomeContainer}>
            <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2015-05-01"
            maxDate="2025-05-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity  style={styles.button} onPress={this.onSubmit.bind(this)}>
            <Text style={styles.buttonText}>submit</Text>
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
      borderColor:'black'
    },
    fields:{
        flex:1,
        flexDirection:'row',
    },
    welcomeContainer: {
      flex: 1,
      justifyContent: "center"
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#F5FCFF',
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
      justifyContent: 'flex-end',
      alignSelf:'center'
    }
  });
const mapStateToProps = state => {
    return { information: state }
}
export default connect(mapStateToProps, actions)(MyDate);