import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Feed from '../screens/Feed/index';
import Setting from '../screens/Setting';
import {View} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage: () => {
          return <Icon name="chevron-back-sharp" size={24} color="#03befc" />;
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          height: 60,
        },
        headerTintColor: '#03befc',
        headerTitleStyle: {
          textAlign: 'center',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Assignment',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <AntIcon
                name="search1"
                size={24}
                color="#03befc"
                style={{marginRight: 10}}
              />
              <AntIcon name="filter" size={24} color="#03befc" />
            </View>
          ),
        }}
      />

      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
