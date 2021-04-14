import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Main from './src/screen/Main_screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screen/Splash';
import SignUp from './src/screen/SignUp';
import Login from './src/screen/Login';
// import Mine_page from './src/screen/Mine_page';
import Drawer_nav from "./src/screen/Drawer_nav";

const signUpPage = () => {
  return <SignUp />;
};

const App = () => {
  const Stack = createStackNavigator();
  return (
    // <View>
    //   <AppHome/>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={signUpPage}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name="Drawer"
          component={Drawer_nav}
          options={{headerMode: 'none', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
