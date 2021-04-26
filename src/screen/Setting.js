import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import {Avatar, Button, Divider, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from './AuthProvider';
import firestore from '@react-native-firebase/firestore';

const Setting = () => {
  const {logout} = React.useContext(AuthContext);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [name, setName] = React.useState('');
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <Header />
        <View style={styles.main2}>
          <Avatar.Image size={52} source={require('../assest/index.png')} />
          <Text style={styles.Avttex}>{name.name}</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>Full Name</Text>
          <Text style={styles.text2}>Usama</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>Username</Text>
          <Text style={styles.text2}>Usama15</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>Invition Code</Text>
          <Text style={styles.text2}>Coming soon</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>Referral Link to Share</Text>
          <Text style={styles.text2}>Coming soon</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>Phone Number</Text>
          <Text style={styles.text2}>+93201234567</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text2}>Coming soon</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>Facebook</Text>
          <Text style={styles.text2}>Coming soon</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>Second Currency</Text>
          <Text style={styles.text2}>Coming soon</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>White Paper</Text>
          <Text style={styles.text2}>Coming soon</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>FAQ</Text>
          <Text style={styles.text2}>Coming soon</Text>
        </View>
        <Divider style={styles.dev} />
        <View style={styles.main3}>
          <Text style={styles.text}>
            Help cover the server and maintenance cost associated with your
            account by having Ads
          </Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>

        <Divider style={styles.dev} />
        <Button
          style={styles.btn}
          mode="contained"
          theme={{colors: {primary: '#66cc66'}}}
          onPress={() => logout()}>
          LogOut
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: '100%',
  },
  main2: {
    flexDirection: 'row',
    marginLeft: '2%',
    marginTop: '2%',
  },
  main3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '2%',
    marginTop: '2%',
    fontSize: 30,
    paddingBottom: '3%',
    width: '95%',
  },
  Avttex: {
    marginTop: '3%',
    marginLeft: '2%',
  },
  dev: {
    marginTop: '2%',
  },
  text: {
    // marginRight: '65%',
    marginLeft: '2%',
    flex: 1,
  },
  text2: {
    textAlign: 'right',
  },
  btn: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '20%',
    marginBottom: '10%',
  },
});

export default Setting;
