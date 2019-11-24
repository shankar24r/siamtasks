import React, { Component } from 'react';
import  { Image, StyleSheet, ImageBackground,Dimensions, View, Text, TextInput, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import bgimage from './images/bgimage.jpg'   // Background Image
import logo from './images/logo.png'          // Logo Image

const {width,height} = Dimensions.get('window');

export default class Register extends Component{

  render(){
    return(
      <ImageBackground source={bgimage} style={style.container}>
        <KeyboardAwareScrollView >
        <View style={style.logocontainer}>
        <Image source={logo} style={style.logo}/>
          <Text style={style.logotext}>Registration Page</Text>
        </View>
        <View style={style.inputcontainor}>              
          <TextInput
           style={style.input}
          placeholder={"Firstname"}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
        </View>
        <View style={style.inputcontainor}>
          <TextInput
           style={style.input}
          placeholder={"Lastname"}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
        </View>
        <View style={style.inputcontainor}>             
          <TextInput
           style={style.input}
          placeholder={"Email ID"}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
        </View>
        <View style={style.inputcontainor}>
          <TextInput
           style={style.input}
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
        </View>
        <View style={style.inputcontainor}>
          <TextInput
           style={style.input}
          placeholder={"Confirm Password"}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'/>
        </View>

        <TouchableOpacity style={style.btnlogin}>
          <Text style={style.btntext}>Create</Text>
        </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ImageBackground>

    );
  }
}

const style=StyleSheet.create({
container: {
  flex: 1,
  alignItems:'center',
  justifyContent: 'center'
},
logocontainer:{
  alignItems:'center',
  marginBottom: 30,
  marginTop:30,
},
logotext:{
  color:'white',
  fontSize:25,
  fontStyle:'bold',
  marginTop:10,
},
inputcontainor:{
  marginTop : 8
},
logo:{
  width:150,
  height:150
},
input:{
  width:width-50,
  height: 50,
  borderRadius: 20,
  fontSize: 16,
  paddingLeft: 45,
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  color: 'rgba(255, 255, 255, 0.7)',
  marginHorizontal: 25
},
btnlogin:{
  width:width-50,
  height: 50,
  borderRadius: 25,
  backgroundColor:'#FF4A83',
  justifyContent:'center',
  marginTop:20,
  marginHorizontal: 25,
  marginBottom: 20
},
btntext:{
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 16,
  textAlign:'center',
},
})