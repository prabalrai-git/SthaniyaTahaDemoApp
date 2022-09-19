import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export function GeneralInfoCard({title, id, icon, textNumber}) {
  return (
    <Pressable id={id}>
      <View style={styles.Container}>
        <Text style={styles.text}>
          {'    '}
          <Icon name={icon} style={styles.icon}></Icon>
          {'  '}
          {title}
        </Text>
        <Text style={styles.textNumber}>{textNumber}</Text>
      </View>
    </Pressable>
  );
}

export default GeneralInfoCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#2179ff',
    padding: 20,
    height: 100,

    borderRadius: 10,
  },
  text: {
    color: 'white',
    marginTop: 10,
  },
  textNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginLeft: 14,
  },
  icon: {
    fontSize: 30,
    color: 'white',
  },
});
