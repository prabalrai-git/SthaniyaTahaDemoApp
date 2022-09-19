import {Pressable, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const onclick = () => {
  alert('you clicked me ');
};
export function InfoCards({title, id, icon, textData}) {
  return (
    <Pressable
      style={id == 7 ? styles.fullcontainer : styles.itemContainer}
      onPress={onclick}
      id={id}>
      <View>
        <Icon name={icon} style={styles.icon}></Icon>

        <Text style={styles.title}> {title}</Text>
        <Text style={styles.textData}>{textData}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fullcontainer: {
    backgroundColor: 'white',
    height: 70,
    marginBottom: 10,

    width: '90%',
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 100,
    width: '45%',
    borderRadius: 10,
    marginBottom: 6,
    marginLeft: 5,
    padding: 5,
    overflow: 'hidden',
  },

  textData: {
    fontSize: 10,
    color: 'grey',
    fontWeight: '400',
    marginLeft: 14,
  },
  icon: {
    fontSize: 20,
    color: '#2179ff',
    marginTop: 10,
    marginLeft: 15,
  },
  title: {
    color: '#2179ff',
    marginLeft: 10,
  },
});
