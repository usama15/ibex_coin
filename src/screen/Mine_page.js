import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Header from './Header';

const Mine_page = () => {
  return (
    <ScrollView>
      <ScrollView>
        <Header />
        <Button
          style={styles.btn}
          mode="contained"
          theme={{colors: {primary: '#66cc66'}}}
          onPress={() => {}}>
          Activat Mining
        </Button>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '40%',
  },
});

export default Mine_page;
