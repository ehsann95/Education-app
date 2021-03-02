import React from 'react';
import {Text, View} from 'react-native';
import BottomNavigation from '../../Navigation/BottomNavigation';

const Setting = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <BottomNavigation />
    </View>
  );
};

export default Setting;
