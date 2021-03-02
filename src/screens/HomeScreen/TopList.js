import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  //   StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DATA = [
  {
    id: '1',
    title: 'Overdue',
  },
  {
    id: '2',
    title: 'To Do',
  },
  {
    id: '3',
    title: 'InReview',
  },
  {
    id: '4',
    title: 'Completed',
  },
];

const Item = ({item, onPress, style, selectedItem}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>

    {selectedItem?.id === item.id && <Text style={styles.border}></Text>}
  </TouchableOpacity>
);

const TopList = ({setSelectedItem, selectedItem}) => {
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedItem(item)}
        selectedItem={selectedItem}
      />
    );
  };

  return (
    // <View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </SafeAreaView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 46,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    // marginLeft: 20,
  },

  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#8c8c8c',
  },
  border: {
    borderBottomColor: '#03befc',
    borderBottomWidth: 2,
    marginTop: -15,
  },
});

export default TopList;
