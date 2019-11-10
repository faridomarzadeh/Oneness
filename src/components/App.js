/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/StateReducer';
import RoleSelector from './RoleSelector';


const store=createStore(reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component{
  render()
  {
    return(
      <Provider store={store}>
        <RoleSelector/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    alignItems:'center'
  }
});

export default App;
