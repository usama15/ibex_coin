import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const Main_screen = () => {
  return (
    <View>
      <Image
        style={styles.sectionContainer}
        source={require('../assest/App-icon.png')}
      />
      <Text style={styles.sectionTitle}>Ibex Coin</Text>
      <Text style={styles.secondText}>The Future Cryptocurrency</Text>
      <Text style={styles.highlight}>Ibex Crypto Network</Text>
      <Text style={styles.footer}>
        Copyright 2020 UAE Based Company All Right Reserved
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 160,
    width: 200,
    height: 200,
    marginHorizontal: 90,
  },
  sectionTitle: {
    fontFamily: 'san',
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ea5873',
    marginHorizontal: 90,
  },
  secondText: {
    marginHorizontal: 85,
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#66cc66',
  },
  highlight: {
    opacity: 0.2,
    marginHorizontal: '33%',
    marginTop: '61%',
  },
  footer: {
    opacity: 0.2,
    marginHorizontal: '2%',
  },
});

export default Main_screen;
