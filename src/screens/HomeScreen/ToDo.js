import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import maths from '../../images/math.png';
import chemistry from '../../images/chemistry.png';
import physics from '../../images/physics.png';

const data = [
  {
    id: '1',
    subject: 'Science',
    topic: 'Protons',
    date: '25 jan 2020',
    image: chemistry,
    work: 'Homework',
  },
  {
    id: '2',
    subject: 'Physics',
    topic: 'Protons',
    date: '25 jan 2020',
    image: physics,
    work: 'Homework',
  },
  {
    id: '3',
    subject: 'Chemistry',
    topic: 'Amino Acids',
    date: '25 jan 2020',
    image: chemistry,
    work: 'Homework',
  },
  {
    id: '4',
    subject: 'Mathematics',
    topic: 'Algebra',
    date: '25 jan 2020',
    image: maths,
    work: 'Homework',
  },
  {
    id: '4',
    subject: 'Mathematics',
    topic: 'Algebra',
    date: '25 jan 2020',
    image: maths,
    work: 'Homework',
  },
];

const ToDo = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          {data.map((item, i) => {
            return (
              <View key={i} style={styles.card}>
                <View style={styles.cardLeft}>
                  <View style={styles.innerBox}>
                    <Text style={styles.subject}>{item.subject}</Text>
                    <Text style={styles.work}>{item.work}</Text>
                  </View>
                  <Text style={styles.topic}>{item.topic}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                <View style={styles.cardRight}>
                  <Image style={styles.image} source={item.image} />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '85%',
    width: '100%',
    padding: 15,
    backgroundColor: 'whitesmoke',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    height: 120,
    overflow: 'hidden',
    elevation: 3,
  },
  cardLeft: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
  },
  cardRight: {},
  image: {
    height: '100%',
    width: 130,
    overflow: 'hidden',
  },

  subject: {
    color: '#03befc',
    fontSize: 16,
    marginRight: 10,
  },

  work: {
    backgroundColor: 'lightgrey',
    fontSize: 8,
    padding: 3,
    borderRadius: 3,
  },
  topic: {
    marginVertical: 10,
  },
  date: {
    color: 'grey',
    fontSize: 10,
  },
});

export default ToDo;
