import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button, TextInput, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp = () => {
  const [value, setValue] = React.useState(null);
  const navigation = useNavigation();
  const {register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');

  // const userSignup = async () => {
  //   if (!email || !password || !confirmPassword) {
  //     alert('please add all field');
  //     return;
  //   }
  //
  //   try {
  //     const result = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     firestore().collection('users').doc(result.user.uid).set({
  //       email: result.user.email,
  //       uid: result.user.uid,
  //     });
  //   } catch (error) {
  //     alert(error.code);
  //   }
  // };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.sectionTitle}>Ibex Coin</Text>
        <Text style={styles.secondText}>The Future Cryptocurrency</Text>
        <TextInput
          mode="outlined"
          style={styles.textbar}
          label={'First Name'}
          theme={{colors: {text: 'black', primary: '#f4b165'}}}
        />
        <TextInput
          mode="outlined"
          style={styles.textbar}
          label={'Last Name'}
          theme={{colors: {text: 'black', primary: '#f4b165'}}}
        />
        <TextInput
          mode="outlined"
          style={styles.textbar}
          label={'Username'}
          theme={{colors: {text: 'black', primary: '#f4b165'}}}
          onChangeText={userName => setName(userName)}
          labelValue={name}
        />
        <TextInput
          mode="outlined"
          style={styles.textbar}
          label={'Email'}
          labelValue={email}
          theme={{colors: {text: 'black', primary: '#f4b165'}}}
          onChangeText={userEmail => setEmail(userEmail)}
        />
        <TextInput
          mode="outlined"
          style={styles.textbar}
          label={'Password'}
          theme={{colors: {text: 'black', primary: '#f4b165'}}}
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TextInput
          mode="outlined"
          style={styles.textbar}
          label={'Confirm Password'}
          theme={{colors: {text: 'black', primary: '#f4b165'}}}
          onChangeText={userPassword => setConfirmPassword(userPassword)}
          labelValue={confirmPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <Text style={styles.gen}>Gender</Text>
          <View style={styles.radio}>
            <RadioButton value="first" />
            <Text style={styles.lab}>Male</Text>
            <RadioButton style={styles.sec} value="second" />
            <Text style={styles.lab}>Female</Text>
          </View>
        </RadioButton.Group>

        <Button
          style={styles.btn}
          mode="contained"
          theme={{colors: {primary: '#f4b165'}}}
          // onPress={() => navigation.navigate('Drawer')}
          // onPress={() => userSignup()}
          onPress={() => register(email, password)}>
          Finish
        </Button>
        <Text style={styles.highlight}>Ibex Crypto Network</Text>
        <Text style={styles.footer}>
          Copyright 2020 UAE Based Company All Right Reserved
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sec: {
    marginHorizontal: '100%',
  },
  lab: {
    marginTop: '2%',
  },
  gen: {
    marginHorizontal: '8%',
    fontSize: 18,
    marginTop: '2%',
  },
  radio: {
    // flex: 1,
    flexDirection: 'row',
    marginHorizontal: '10%',
  },
  textbar: {
    width: '90%',
    marginHorizontal: '5%',
  },
  btn: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '20%',
  },
  sectionTitle: {
    // fontFamily: 'agencyfb',
    fontSize: 48,
    fontWeight: 'bold',
    color: '#f4b165',
    marginHorizontal: 90,
  },
  secondText: {
    marginHorizontal: 85,
    fontSize: 18,
    fontWeight: '400',
    color: '#66cc66',
    marginBottom: '10%',
  },
  fo: {
    marginTop: '70%',
    marginHorizontal: 100,
  },
  highlight: {
    opacity: 0.2,
    marginHorizontal: '33%',
    marginTop: '5%',
  },
  footer: {
    opacity: 0.2,
    marginHorizontal: '2%',
  },
});

export default SignUp;
