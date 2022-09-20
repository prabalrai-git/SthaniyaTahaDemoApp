import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {ModalContext} from './FooterButtons';

const MenuList = ({id, icon, title}) => {
  const setModalVisible = useContext(ModalContext);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('commonScreen', {
      title: title,
    });
    setModalVisible(false);
  };

  return (
    <Pressable onPress={onPress}>
      <View id={id}>
        <Icon name={icon} style={styles.icon}>
          {'   '}
          <Text style={styles.txt}>{title}</Text>
        </Icon>
      </View>
    </Pressable>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  icon: {
    color: '#2179ff',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 36,
  },
});
