import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

const MyComponent = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header theme={{colors: {primary: '#f4b165'}}}>
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
      <Appbar.Content
        theme={{colors: {primary: '#eeecea'}}}
        title="Ibex Coin"
        subtitle="The Future Cryptocurrency"
      />
    </Appbar.Header>
  );
};

export default MyComponent;
