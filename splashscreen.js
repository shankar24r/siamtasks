import React, { Component } from 'react';
import { View, StyleSheet, Image, AsyncStorage } from 'react-native';
import splash from './images/splash.png'


export default class splashscreen extends Component{

    componentWillMount() {                                                          // componentWillMount is used for one time render
        setTimeout(async()=> {                                                       // Timout set for splash screen       
            const Logged = await AsyncStorage.getItem('LoggedIn');             // getting Key from inter storage   
            this.props.navigation.navigate(Logged !== '1' ? 'Auth' : 'App')      // if key is match go to App page else Auth Page   
        }, 3000);                                                                     // Time set for 2 seconds
    }

  
    render(){ 
        return(
            <View style={style.container}>
                <Image source={splash} style={style.splashimage}></Image>
            </View>
        );
    }
}
const style=StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center', 

     },
     splashimage:{
resizeMode:'cover',
width:'100%',
height:'100%',

    }
    
})