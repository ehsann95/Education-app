import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Icon name="file1" size={26} color="#8c8c8c" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={26} color="#8c8c8c" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Icon name="user" size={26} color="#8c8c8c" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 40,
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default BottomNavigation;
