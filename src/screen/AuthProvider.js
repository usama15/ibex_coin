import React from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Drawer} from '../navigation/Drawer_nav';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(null);
  // const [name, setName] = React.useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password, name) => {
          try {
            const userDocument = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            // await firestore()
            //   .collection('users')
            //   .doc(userDocument.user.uid)
            //   .onSnapshot(doc => {
            //     setUser({
            //       name: doc.data().name,
            //
            //       // user: {
            //       // },
            //     });
            //   });

            // alert(user);
          } catch (error) {
            alert(error.code);
          }
        },
        register: async (email, password, name) => {
          try {
            const result = await auth().createUserWithEmailAndPassword(
              email,
              password,
              name,
            );
            await firestore().collection('users').doc(result.user.uid).set({
              email: email,
              uid: result.user.uid,
              name: name,
            });
          } catch (error) {
            alert(error.code);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            alert(error.code);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
