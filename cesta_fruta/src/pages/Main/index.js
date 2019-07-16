import React, {Component} from 'react';
import api from '../../services/api';

import {
  Text, View, StyleSheet,ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  Text:{
    textAlign: "center",
    color: "#000"
  }
});


export default class Main extends Component{
  
  static navigationOption = {

    title: "home"
    
  };

  ComponentDidMount(){

    this.loadProducts();

  }

  loadProducts = async () => {
   
    const response = await api.get('/');

    const {basket} = response.data;

    console.log(basket);
  };

  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Text}>Olá mundo</Text>
        </View>
      </ScrollView>       
    );
  }
}

