import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;

export function FooterNavigation() {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.itemContainer}>
          <Pressable>
            <Text style={styles.items}>Home</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.items}>Services</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.items}>News</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.items}>Menu</Text>
            <Icon name="glass" size={20} color="red"></Icon>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth,
    padding: 8,

    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  items: {
    color: 'blue',
  },
});
