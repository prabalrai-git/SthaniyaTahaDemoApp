import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const NotificationIcons = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.notificationContainer}>
        <Pressable
          onPress={() => {
            Alert.alert('अलर्ट', 'तपाईंले सूचना क्लिक गर्नुभयो');
          }}>
          <View style={[styles.NIIcons, styles.NIcons]}>
            {/* Bell notification */}

            <Text>
              <Icon name="bell-o" color="#2179ff" size={20} />
              {''}
            </Text>
          </View>
        </Pressable>

        {/* Ellipsis notification */}
        <Pressable onPress={() => setModalVisible(true)}>
          <View style={[styles.ellipsis, styles.NIcons]}>
            <Text>
              <Icon name="ellipsis-v" color="grey" size={20} />
            </Text>
          </View>
        </Pressable>
      </View>

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
            onPress={() => {
              Alert.alert('अलर्ट', 'तपाईंले क्लिक गर्नुभयो');
            }}
            activeOpacity={1}>
            <View style={{marginTop: 10}}>
              <Text style={{color: 'black', textAlign: 'center'}}>
                {' '}
                भुक्तानी विवरण{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default NotificationIcons;

const styles = StyleSheet.create({
  NIcons: {
    position: 'relative',
    top: -45,
    left: 314,
    // margin: 2,
  },
  NIIcons: {
    backgroundColor: 'white',

    padding: 10,
    paddingLeft: 15,
    paddingRight: 3,
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
    backgroundColor: 'white',
    width: 155,
    height: 45,
    elevation: 8,
    shadowColor: '#52006A',
  },
  // box shadow
  elevation: {elevation: 8, shadowColor: '#52006A'},

  // to make notification menu presisely pressable
  ellipsis: {
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 40,
    marginLeft: 5,
  },
  notificationContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
