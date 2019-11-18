import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import * as actions from '../actions/index';

const Form = t.form.Form;
const DemographicInfo=t.struct({
    gender:t.enums({'Male':'Male','Female':'Female','Other':'Other'}),
    age:t.Number,
    'Country of Citizenship':t.String,
    'Home Country':t.String,
    'Native Language':t.String,
    'Ethnic Identity':t.String,
    'religion or my spiritual orientation':t.String,
    'socio-economic situation':t.String,
    'professional training':t.String,
    'professional status':t.String,
    'Type of organization or employer':t.String,
    'Borough or territory of the organization':t.String,
    'status or function in the organization':t.String,
    'Frequency of contact with people of immigrant origin':t.String,
    'Other categories or identity markers':t.String
})
const ObservedDemographicInfo=t.struct({
    gender:t.maybe(t.enums({'Male':'Male','Female':'Female','Other':'Other'})),
    age:t.maybe(t.Number),
    'Country of Citizenship':t.maybe(t.String),
    'Home Country':t.maybe(t.String),
    'Native Language':t.maybe(t.String),
    'Ethnic Identity':t.maybe(t.String),
    'religion or my spiritual orientation':t.maybe(t.String),
    'socio-economic situation':t.maybe(t.String),
    'professional training':t.maybe(t.String),
    'professional status':t.maybe(t.String),
    'Type of organization or employer':t.maybe(t.String),
    'Borough or territory of the organization':t.maybe(t.String),
    'status or function in the organization':t.maybe(t.String),
    'Frequency of contact with people of immigrant origin':t.maybe(t.String),
    'Other categories or identity markers':t.maybe(t.String)
})
export class DemographicInformation extends Component{
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
    onSubmit()
    {
        let value = this.refs.form.getValue();
        if (value) {
            this.props.setDemographicInformation(value);
            this.props.navigation.navigate('People')
        }
    }
    onSubmitObserver(){
        let value=this.refs.observerForm.getValue();
        if(value)
        {
            this.props.setObserverDemographicInformation(value)
        }
        this.props.navigation.navigate('People');
    }
    render()
    {
        if(this.props.information.role=='user')
        {
        return(
            <View style={styles.container}>
            <ScrollView>
                <Form type={DemographicInfo}
                 onChange={this.onChange.bind(this)}
                 ref="form"
                 value={this.state.value}/>

         <View style={styles.buttonContainer}>
            <TouchableOpacity  style={styles.button} onPress={this.onSubmit.bind(this)}>
            <Text style={styles.buttonText}>submit</Text>
          </TouchableOpacity>
          </View>
            </ScrollView>
            </View>
        )
        }
        if(this.props.information.role=='observer')
        {
            return(
                <View style={styles.container}>
            <ScrollView>
                <Form type={ObservedDemographicInfo}
                 onChange={this.onChange.bind(this)}
                 ref="observerForm"
                 value={this.state.value}/>

         <View style={styles.buttonContainer}>
            <TouchableOpacity  style={styles.button} onPress={this.onSubmitObserver.bind(this)}>
            <Text style={styles.buttonText}>submit</Text>
          </TouchableOpacity>
          </View>
            </ScrollView>
            </View>
            );
        }
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
export default connect(mapStateToProps, actions)(DemographicInformation);