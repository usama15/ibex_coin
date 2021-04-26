import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Mine_page from '../screen/Mine_page';
import Setting from '../screen/Setting';

const Drawer = createDrawerNavigator();

export default function Drawer_nav({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        options={
          <Icon.Button
            name="ios-menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        }
        name="Dashbord"
        component={Mine_page}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={
          <Icon.Button
            name="ios-menu"
            size={30}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        }
      />
    </Drawer.Navigator>
  );
}
