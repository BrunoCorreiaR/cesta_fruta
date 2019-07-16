import React, {Component} from 'react';
import api from '../../services/api';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.21,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.21 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default class Main extends Component{
  static navigationOption = {
    title:"home"
  };
  
    render(){
      return(
        <ScrollView>
          <Text>Cheigie</Text>
        </ScrollView>  
      );
  }
}

