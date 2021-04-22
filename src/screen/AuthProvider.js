import React from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Drawer} from './Drawer_nav';

export const AuthContext = React.createContext();

export const AuthProvider = ({children, navigation}) => {
  const [user, setUser] = React.useState(null);
  // const navigation = useNavigation();
 
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // login,
        login: async (email, password) => {
          try {
            auth().signInWithEmailAndPassword(email, password);
            alert('login success');
            navigation.navigate('Drawer');
          } catch (error) {
            alert(error.code);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            // navigation.navigate('login');
            alert('register success');
          } catch (error) {
            alert(error.code);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
