import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import GeneralInfoCard from '../Components/GeneralInfoCard';
import HomeCarousel from '../Components/HomeCarousel';

const windowWidth = Dimensions.get('window').width;

export function Home() {
  const GeneralInfoCardData = [
    {id: 1, title: 'जनसंख्या', icon: 'group', textNumber: '12321'},
    {id: 2, title: 'क्षेत्रफल', icon: 'area-chart', textNumber: '12321'},
    {id: 3, title: 'वडा', icon: 'home', textNumber: '12321'},
  ];

  return (
    <ScrollView>
      <HomeCarousel />
      <View styles={styles.flexContainer}>
        {GeneralInfoCardData.map(e => (
          <GeneralInfoCard
            title={e.title}
            icon={e.icon}
            id={e.id}
            textNumber={e.textNumber}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    width: windowWidth,
    padding: 8,
    flexDirection: 'row',
  },
});
