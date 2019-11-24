/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import dashboard from './dashboard';
import splashscreen from './splashscreen';
import net from './net';

AppRegistry.registerComponent(appName, () => net);
