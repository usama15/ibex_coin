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
  ImageBackground,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './src/screen/SignUp';
import Drawer_nav from './src/navigation/Drawer_nav';
import auth, {firebase} from '@react-native-firebase/auth';
import AuthStack from './src/navigation/AuthStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivityIndicator} from 'react-native-paper';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsLoggedIn(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View>
        {/*<ImageBackground>*/}
        <View>
          <MaterialCommunityIcons
            name="alpha-m-circle"
            size={220}
            color="#FFFFFF"
          />

          <ActivityIndicator animating={true} size="large" color="black" />
        </View>
        {/*</ImageBackground>*/}
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <Drawer_nav /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
