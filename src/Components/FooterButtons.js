import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, createContext, useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuItems from './MenuItems';

export const ModalContext = createContext();
const FooterButtons = ({title, onPress, icon}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return title === 'मेनु' ? (
    <ModalContext.Provider value={setModalVisible}>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.itemContainer}>
        <View styles={styles.itemsContainer}>
          <Icon name={icon} size={20} style={styles.icon}></Icon>
          <Text style={styles.items}>{title}</Text>
        </View>
        <View style={styles.elevation}>
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
                activeOpacity={1000}>
                {/* close icon */}

                <MenuItems />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        </View>
      </Pressable>
    </ModalContext.Provider>
  ) : (
    <Pressable onPress={onPress} style={styles.itemContainer}>
      <View styles={styles.itemsContainer}>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  modal: {
    backgroundColor: 'white',
    width: 240,
    height: '100%',
    elevation: 200,
    shadowColor: '#52006A',
  },
  itemContainer: {
    // backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
