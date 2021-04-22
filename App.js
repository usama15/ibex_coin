// import React from 'react';
// import Main from './src/screen/Main_screen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Splash from './src/screen/Splash';
// import SignUp from './src/screen/SignUp';
// import Login from './src/screen/Login';
// // import Mine_page from './src/screen/Mine_page';
// import Drawer_nav from './src/screen/Drawer_nav';
//
// const signUpPage = () => {
//   return <SignUp />;
// };
//
//
// const App = () => {
//   const Stack = createStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="splash"
//           component={Splash}
//           options={{headerMode: 'none', headerShown: false}}
//         />
//         <Stack.Screen
//           name="signup"
//           component={signUpPage}
//           options={{headerMode: 'none', headerShown: false}}
//         />
//         <Stack.Screen name="login" component={Login} />
//         <Stack.Screen
//           name="Drawer"
//           component={Drawer_nav}
//           options={{headerMode: 'none', headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// export default App;
//
// // import React from 'react';
// // import {View} from 'react-native';
// // import IndexNav from './src/navigation/IndexNav';
// // import Routes from './src/navigation/Routes';
// // const App = () => {
// //   return (
// //     <View>
// //       {/*<IndexNav />*/}
// //       <Routes />
// //     </View>
// //   );
// // };
// // export default App;

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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screen/Splash';
import SignUp from './src/screen/SignUp';
import Login from './src/screen/Login';
import Drawer_nav from './src/screen/Drawer_nav';
import {AuthContext} from './src/screen/AuthProvider';
import auth from '@react-native-firebase/auth';

const signUpPage = () => {
  return <SignUp />;
};

const App = () => {
  const {user, setUser} = React.useContext(AuthContext);
  const [initializing, setInitializing] = React.useState(true);
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  const Stack = createStackNavigator();
  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerMode: 'none', headerShown: false}}
        />

        {/*<Stack.Screen name="login" component={Login} />*/}

        <Stack.Screen
          name="signup"
          component={signUpPage}
          options={{headerMode: 'none', headerShown: false}}
        />

        {user ? (
          <Stack.Screen
            name="Drawer"
            component={Drawer_nav}
            options={{headerMode: 'none', headerShown: false}}
          />
        ) : (
          <Stack.Screen name="login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
