import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,Dimensions,TouchableOpacity, Alert} from 'react-native';
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import * as actions from '../actions/index';

const Form = t.form.Form;

const eventHappened=t.struct({
    event:t.String,
    'Severity':t.enums({'High':'High','Medium':'Medium','Low':'Low'}),
    outcome:t.String,
    notes:t.maybe(t.String)
})

const formOptions={
    fields:{
        event:{
            label:'please indicate what happened',
            multiline:true,
            stylesheet: {
                ...Form.stylesheet,
                textbox: {
                  ...Form.stylesheet.textbox,
                  normal: {
                    ...Form.stylesheet.textbox.normal,
                    height: 200,
                    textAlignVertical: 'top',
                  },
                  error: {
                    ...Form.stylesheet.textbox.error,
                    height: 200,
                  },
                },
            }
        },

        outcome:{
            label:'What was the outcome',
            multiline:true,
            stylesheet: {
                ...Form.stylesheet,
                textbox: {
                  ...Form.stylesheet.textbox,
                  normal: {
                    ...Form.stylesheet.textbox.normal,
                    height: 200,
                    textAlignVertical: 'top',
                  },
                  error: {
                    ...Form.stylesheet.textbox.error,
                    height: 200,
                  },
                },
            }
        },

        notes:{
            label:'Additional notes',
            multiline:true,
            stylesheet: {
                ...Form.stylesheet,
                textbox: {
                  ...Form.stylesheet.textbox,
                  normal: {
                    ...Form.stylesheet.textbox.normal,
                    height: 200,
                    textAlignVertical: 'top',
                  },
                  error: {
                    ...Form.stylesheet.textbox.error,
                    height: 200,
                  },
                },
            }
        }
    }
}
class Event extends Component{
    constructor(props){
        super(props);
        this.state={
            value:null
        }
    }
    onChange(value)
    {
        this.setState({value});
    }
    Onsubmit(){
        const entereddata=this.refs.observerForm.getValue();
        if(entereddata)
        {
        Alert.alert(
            'Confirmation',
            'Congradualation Your Report has been submitted',
            [
              {text: 'OK', onPress: () => this.setState({value:null})},
            ],
            {cancelable: false},
          );
        }
    }
    render(){
        return(

            <View style={styles.container}>
                <ScrollView>
                        <Form type={eventHappened}
                         onChange={this.onChange.bind(this)}
                         ref="observerForm"
                         value={this.state.value}
                         options={formOptions}/>
        
                 <View style={styles.buttonContainer}>
                    <TouchableOpacity  style={styles.button} onPress={this.Onsubmit.bind(this)}>
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                  </View>
                  </ScrollView>
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
export default connect(mapStateToProps, actions)(Event);