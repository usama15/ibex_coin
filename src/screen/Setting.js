import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import {Avatar, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Setting = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <View style={styles.main2}>
        <Avatar.Image size={52} source={require('../assest/index.png')} />
        <Text style={styles.Avttex}>Syed Omair Ahmed</Text>
      </View>
      <Divider style={styles.dev} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  main2: {
    flexDirection: 'row',
    marginLeft: '2%',
    marginTop: '2%',
  },
  Avttex: {
    marginTop: '3%',
    marginLeft: '2%',
  },
  dev: {
    marginTop: '2%',
  },
});

export default Setting;
