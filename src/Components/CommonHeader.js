import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CommonHeader() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.inlineE}>
        <Image
          style={styles.img}
          source={require('../Assets/img/Nepal-Government.jpg')}
          resizeMode={'cover'}
        />
        <Text style={styles.text1}>प्रदेश नं १, सोलुखुम्बु, नेपाल</Text>
      </Text>
      <Text style={styles.text}>थुलुङ दुधकोशी गाउँपालिका</Text>
      <Text style={styles.NIcons}>
        <Pressable>
          <Text>
            <Icon
              name="bell-o"
              color="#2179ff"
              size={20}
              style={styles.NIIcons}
            />
            {'     '}
          </Text>
        </Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text>
            <Icon
              name="ellipsis-v"
              color="grey"
              size={20}
              style={styles.NIIcons}
            />
          </Text>
        </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => {
              setModalVisible(false);
            }}>
            <TouchableOpacity
              style={styles.modal}
              onPress={() => console.log('do nothing')}
              activeOpacity={1}>
              <Text style={{color: 'black', textAlign: 'center'}}>
                {' '}
                भुक्तानी विवरण{' '}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 0.2,
    borderBottomColor: 'grey',
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
  NIcons: {
    position: 'relative',
    top: -35,
    left: 325,
    margin: 10,
  },
  NIIcons: {
    fontSize: 20,
    fontWeight: 'light',
  },
  ///
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  modal: {
    marginTop: 20,
    marginRight: 15,
    backgroundColor: '#faf9f6',
    width: 155,
    height: 45,
  },
});
