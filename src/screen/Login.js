import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';

const Login = props => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {login} = React.useContext(AuthContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.sectionTitle}>Ibex Coin</Text>
        <Text style={styles.secondText}>The Future Cryptocurrency</Text>
        <TextInput
          mode="outlined"
          style={styles.textbar}
          label={'Username'}
          theme={{colors: {text: 'black', primary: '#f4b165'}}}
          labelValue={email}
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
        <Button
          style={styles.btn}
          mode="contained"
          theme={{colors: {primary: '#f4b165'}}}
          onPress={() => login(email, password)}>
          {' '}
          Login
        </Button>
        <Text style={styles.fo}>New at Ibex Crypto Network ?</Text>
        <Button
          style={styles.btn}
          mode="contained"
          theme={{colors: {primary: '#66cc66'}}}
          onPress={() => navigation.navigate('signup')}>
          Signup
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
  textbar: {
    width: '90%',
    marginHorizontal: '5%',
  },
  btn: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '1%',
  },
  sectionTitle: {
    flex: 1,
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
    marginBottom: '20%',
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

export default Login;
