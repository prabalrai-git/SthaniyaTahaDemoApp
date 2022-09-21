import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import NotificationIcons from './NotificationIcons';

export default function CommonHeader() {
  return (
    <View style={[styles.mainContainer, styles.elevation]}>
      <Text style={styles.inlineE}>
        <Image
          style={styles.img}
          source={require('../Assets/img/Nepal-Government.jpg')}
          resizeMode={'cover'}
        />
        <Text style={styles.text1}>प्रदेश नं १, सोलुखुम्बु, नेपाल</Text>
      </Text>
      <Text style={styles.text}>थुलुङ दुधकोशी गाउँपालिका</Text>
      <NotificationIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    backgroundColor: 'white',
  },
  img: {
    width: 50,
    height: 30,
  },
  text1: {
    color: '#2179ff',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '400',
  },
  text: {
    color: '#2179ff',
    textAlign: 'center',
    fontWeight: '600',
  },
  inlineE: {
    marginLeft: 90,
  },
  elevation: {elevation: 8, shadowColor: '#52006A'},
});
