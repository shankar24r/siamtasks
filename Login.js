import React, { Component } from 'react';
import  { StyleSheet, ImageBackground,Dimensions, Image, View, Text, TextInput, TouchableOpacity, Linking, AsyncStorage} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';   // For scrolling view 
import Snackbar from 'react-native-snackbar';
import NetInfo from "@react-native-community/netinfo";
import bgimage from './images/bgimage.jpg'                                        // Background Image
import logo from './images/logo.png'                                              // Logo Image

const {width,height} = Dimensions.get('window');

export default class Login extends Component{
  navigationOptions = {
    tabBarLabel: 'Login',                                                 // Label for Tab Navigation 'Login'
  }
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      hidePassword: true,                                                 // initially hide the password
    }
  this._login = this._login.bind(this);  
  this.managePasswordVisibility=this.managePasswordVisibility.bind(this);       
  }

  managePasswordVisibility()
  {
    this.setState({hidePassword: !this.state.hidePassword});                // View or Hide password Fuction
  }

  _login = async() => {                                                               // Login function after clicking the login button.

    if(this.state.username=='siam@gmail.com' && this.state.password=='12345'){   // Checking the condition for username and password 
     await AsyncStorage.setItem('LoggedIn','1');                          // setting key'1' for Asystorage
    this.props.navigation.navigate('App');                                 // if correct switch to App page and login to dashboard page 
}else{
      Snackbar.show({                                                         // Snackbar for invalid email or password
        title: 'Email or Password Incorrect',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:' #ff1a1a',
        color:' #000000',
        position:'top',

      })
    }
  }

  render(){
    return(
  
      <ImageBackground source={bgimage} style={style.container} >
            <KeyboardAwareScrollView >
        <View style={style.logocontainer}>
          <Image source={logo} style={style.logo}/>
          <Text style={style.logotext}>LOGIN PAGE.</Text>
        </View>
        <View style={style.inputcontainor}>             
          <TextInput
           style={style.input}
          placeholder={"Email"}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
          onChangeText={(text) => this.setState({username:text})}
          />
        </View>
        <View style={style.inputcontainor}>
          <TextInput
           style={style.input}
          placeholder={"Password"}
          secureTextEntry={this.state.hidePassword}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState({password:text})}
          />
          <TouchableOpacity activeOpacity={0.8} style = {style.visibilityBtn} onPress={this.managePasswordVisibility}>
            <Image source={(this.state.hidePassword) ? require('./images/hide.png') : require ('./images/view.png')} style={style.btnImage}/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={style.btnlogin} onPress={this._login}>
          <Text style={style.btntext}>Login</Text>
        </TouchableOpacity>

        <View style={style.footer}>
          <Text style={style.terms}
          onPress={() => Linking.openURL('https://www.danasbakery.com/pages/terms-of-service')}> 
          Privacy Policy</Text>
        </View>
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
logo:{
  width:150,
  height:150
},

inputcontainor:{
  marginTop : 8
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
  marginTop:10,
  height: 50,
  borderRadius: 23,
  backgroundColor:'#FF4A83',
  justifyContent:'center',
  marginHorizontal: 25

},
btntext:{
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 16,
  textAlign:'center',
},
footer:{
  marginTop:10,
  alignItems:'center' 
},
terms:{
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 16,
  textDecorationLine: 'underline',
},
visibilityBtn:
  {
    position: 'absolute',
    right: 26,
    height: 40,
    width: 35,
    padding: 4
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
})