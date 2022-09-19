import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonCovid = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('covidInfo')}>
      <Text style={styles.txt}>
        <Icon name="virus-outline" style={styles.icon}></Icon>
        {'   '}COVID सम्बन्धि जानकारी
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCovid;

const styles = StyleSheet.create({
  btn: {
    width: '96%',
    backgroundColor: 'red',
    marginTop: 9,
    marginBottom: 9,
    marginLeft: 8,
    padding: 9,
    borderRadius: 6,
  },
  txt: {
    marginLeft: 12,
    color: 'white',
    fontWeight: '550',
  },
  icon: {
    fontSize: 20,
  },
});
