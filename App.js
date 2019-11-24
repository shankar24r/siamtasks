import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Register from './Register';
import dashboard from './dashboard';
import splashscreen from './splashscreen';

const TabNavigator = createBottomTabNavigator ({
  Home:{screen:Login},
  Create:{screen:Register}
  },{
    tabBarOptions:{
      activeTintColor:'white',
      activeBackgroundColor:'#FF4A83',
      inactiveTintColor:'black',
      inactiveBackgroundColor:'#FE739F',
      labelStyle:{
        fontSize:16,
        padding:10,
      }
    }
  });

  const Navigation = createStackNavigator({

    dashboard:{screen:dashboard},

  })

  export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: splashscreen, 
        Auth: TabNavigator,
        App: Navigation,

      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );

