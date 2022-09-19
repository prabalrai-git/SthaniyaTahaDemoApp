import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const FooterButtons = ({title, onPress, icon}) => {
  return (
    <Pressable onPress={onPress} style={styles.itemContainer}>
      <View>
        <Icon name={icon} size={20} style={styles.icon}></Icon>
        <Text style={styles.items}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default FooterButtons;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  items: {
    color: '#2179ff',
  },
  icon: {
    color: '#2179ff',
    position: 'relative',
    left: 1,
  },
});
