import React from 'react';
import {View, Text} from 'react-native';
import BottomNavigation from '../../Navigation/BottomNavigation';

const Feed = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
      <BottomNavigation />
    </View>
  );
};

export default Feed;
