// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Splash from '../screen/Splash';
// import SignUp from '../screen/SignUp';
// import Login from '../screen/Login';
// import Drawer_nav from '../screen/Drawer_nav';
// import {AuthContext, AuthProvider} from '../screen/AuthProvider';
// import auth from '@react-native-firebase/auth';
//
// const signUpPage = () => {
//   return <SignUp />;
// };
//
// const AuthStack = () => {
//   const {user, setUser} = React.useContext(AuthContext);
//   const [initializing, setInitializing] = React.useState(true);
//   const onAuthStateChanged = user => {
//     setUser(user);
//     if (initializing) {
//       setInitializing(false);
//     }
//   };
//
//   React.useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);
//   const Stack = createStackNavigator();
//   if (initializing) {
//     return null;
//   }
//
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="splash"
//         component={Splash}
//         options={{headerMode: 'none', headerShown: false}}
//       />
//
//       {/*<Stack.Screen name="login" component={Login} />*/}
//
//       <Stack.Screen
//         name="signup"
//         component={signUpPage}
//         options={{headerMode: 'none', headerShown: false}}
//       />
//
//       <Stack.Screen
//         name="Drawer"
//         component={Drawer_nav}
//         options={{headerMode: 'none', headerShown: false}}
//       />
//
//       <Stack.Screen name="login" component={Login} />
//     </Stack.Navigator>
//   );
// };
//
// export default AuthStack;
