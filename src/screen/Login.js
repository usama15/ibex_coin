import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
// import {TextInput} from 'react-native-paper';

const Login = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Ibex Coin</Text>
      <Text style={styles.secondText}>The Future Cryptocurrency</Text>
      <Text>Email</Text>
      <TextInput style={styles.textbar} />
    </View>
  );
};

const styles = StyleSheet.create({
  textbar: {
    borderColor: 'black',
    borderWidth: 1,
  },
  sectionTitle: {
    fontFamily: 'san',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ea5873',
    marginHorizontal: 90,
  },
  secondText: {
    marginHorizontal: 85,
    fontSize: 18,
    fontWeight: '400',
    color: '#66cc66',
  },
});

export default Login;
