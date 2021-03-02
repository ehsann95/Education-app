import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomNavigation from '../../Navigation/BottomNavigation';
import Completed from './Completed';
import InReview from './InReview';
import OverDue from './OverDue';
import ToDo from './ToDo';
import TopList from './TopList';

const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState({
    id: '2',
    title: 'To Do',
  });
  return (
    <>
      <View style={styles.container}>
        <TopList
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
        {selectedItem.id === '1' && <OverDue />}
        {selectedItem.id === '2' && <ToDo />}
        {selectedItem.id === '3' && <InReview />}
        {selectedItem.id === '4' && <Completed />}
      </View>
      <BottomNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#fff',
    // position: 'relative',
  },
});

export default HomeScreen;
