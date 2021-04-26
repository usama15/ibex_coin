import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/Login';
import signUpPage from '../screen/SignUp';
import Splash from '../screen/Splash';

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
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
    </Stack.Navigator>
  );
};

export default AuthStack;
