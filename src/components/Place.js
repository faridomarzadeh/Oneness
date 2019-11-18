import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import * as actions from '../actions/index';

const Form = t.form.Form;
const placeOccured=t.struct({
    'Type of the Place that event took place':t.enums({'Hospital':'Hospital','Police Station':'Police Station'}),
    'Name of the place':t.String,
    'Address':t.String

})
const Formoptions={
    fields:{
        Address:{
            placeholder:''        }
    }
}
class Place extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            value:null
        }
    }

    static navigationOptions = {
        title: 'Oneness',
        headerStyle: {
          backgroundColor: '#ebebeb'
        }
      }

    onChange(value){
        this.setState({value});
    }
    onSubmit(){
        this.props.navigation.navigate('DateOccured');
    }

    render(){
        return(
            <View style={styles.container}>
                <Form type={placeOccured}
                 onChange={this.onChange.bind(this)}
                 ref="placeForm"
                 value={this.state.value}
                 options={Formoptions}/>
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
      justifyContent: 'flex-start',
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
      justifyContent: "flex-end"
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
export default connect(mapStateToProps, actions)(Place);