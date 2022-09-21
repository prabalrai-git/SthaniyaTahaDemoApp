import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React, {useContext} from 'react';
import MenuList from './MenuList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ModalContext} from './FooterButtons';

const MenuItems = () => {
  const setModalVisible = useContext(ModalContext);
  const menuListData = [
    {id: 1, icon: 'contacts', title: 'सम्पर्क'},
    {
      id: 2,
      icon: 'frequently-asked-questions',
      title: 'प्राय सोधिने प्रश्नहरू',
    },
    {id: 3, icon: 'timeline-help', title: 'मद्दत केन्द्र'},
    {id: 4, icon: 'cash', title: 'कर भुक्तानी'},
    {id: 5, icon: 'face-man', title: 'करदाता विवरण'},
    {id: 6, icon: 'chart-box-outline', title: 'जनमत'},
    {id: 7, icon: 'book-variant', title: 'कानुन'},
    {id: 8, icon: 'database-settings', title: 'स्थानीय तह परिवर्तन'},
  ];

  return (
    <>
      <Pressable
        onPress={() => {
          setModalVisible(false);
        }}>
        <Icon
          name="close"
          style={{
            fontSize: 25,
            marginLeft: 5,
            marginTop: 5,
            color: 'black',
          }}></Icon>
      </Pressable>

      <Image
        style={styles.img}
        source={require('../Assets/img/Nepal-Government.jpg')}
        resizeMode={'cover'}
      />
      <Text style={styles.txt}>अतिथि प्रयोगकर्ता</Text>

      <View style={styles.flexContainer}>
        <View style={[styles.singleCard, styles.elevation, {flex: 1}]}>
          <Icon
            name="information-outline"
            style={{
              marginLeft: 5,
              color: '#2179ff',
              fontSize: 18,
            }}>
            {'     '}
            <Text style={{fontWeight: '500', fontSize: 20}}>हाम्रो बारेमा</Text>
          </Icon>
        </View>
        {/* menu card view */}
        <View
          style={[
            styles.menuItemsContainer,
            styles.elevation,
            {flex: 20, justifyContent: 'space-evenly'},
          ]}>
          {menuListData.map(e => (
            <MenuList
              id={e.id}
              title={e.title}
              icon={e.icon}
              style={{flex: 1}}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  img: {
    marginLeft: 50,
    width: 140,
    height: 70,
  },
  txt: {
    color: '#2179ff',
    textAlign: 'center',
    fontSize: 22,
  },
  singleCard: {
    backgroundColor: '#deeafc',
    width: '90%',
    marginLeft: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
  menuItemsContainer: {
    backgroundColor: '#deeafc',
    width: '90%',
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 10,
    // height: '67%',

    borderRadius: 8,
  },
  //   for box shadow
  elevation: {
    elevation: 8,
    shadowColor: '#52006A',
  },
  // flexbox
  flexContainer: {
    flex: 1,
  },
});
