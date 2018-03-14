import React, { Component } from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';
import {Button, Spinner} from './src/components/common';
import reducers from './src/reducers/index';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDJPHvNGwFjqTqzMLrd_mKHbS8CnTSL3y4',
    authDomain: 'nhlv2-1d942.firebaseapp.com',
    databaseURL: 'https://nhlv2-1d942.firebaseio.com',
    projectId: 'nhlv2-1d942',
    storageBucket: "",
    messagingSenderId: '466811494516'
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    );
  }
}
