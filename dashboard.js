import React, {Component} from 'react';
import { View, Text , ImageBackground, StyleSheet, Button, AsyncStorage} from 'react-native';
import bgimage from './images/bgimage.jpg';

export default class dashboard extends Component{

  _logout = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');   
  }

render(){
  return(
    <ImageBackground source={bgimage} style={style.continer}>
    <View>
      <Button onPress={this._logout} title='Logout'></Button>
      
          </View>
    </ImageBackground>
  )
}
}

const style=StyleSheet.create({
  continer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})