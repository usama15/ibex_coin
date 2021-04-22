/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import {AuthProvider} from './src/screen/AuthProvider';

export default function Main() {
  return (
    <PaperProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
