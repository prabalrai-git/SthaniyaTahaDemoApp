import {StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';
import FooterButtons from './FooterButtons';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;

export function FooterNavigation() {
  const navigation = useNavigation();
  const navData = [
    {id: 1, title: 'होम', route: 'Home', icon: 'home'},
    {id: 2, title: 'सेवाहरू', route: 'Services', icon: 'gear'},
    {id: 3, title: 'समाचार', route: 'News', icon: 'newspaper-o'},
    {id: 4, title: 'मेनु', route: 'Menu', icon: 'bars'},
  ];

  return (
    <>
      <View style={styles.mainContainer}>
        {navData.map(e => (
          <FooterButtons
            title={e.title}
            onPress={() => navigation.navigate(e.route)}
            icon={e.icon}
            key={e.id}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth,
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
});
