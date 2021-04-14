import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
      <Appbar.Content title="Ibex Coin" subtitle="The Future Cryptocurrency" />
    </Appbar.Header>
  );
};

export default MyComponent;
