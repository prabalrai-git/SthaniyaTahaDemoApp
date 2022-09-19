import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonCovid from '../Components/ButtonCovid';
import GeneralInfoCard from '../Components/GeneralInfoCard';
import HomeCarousel from '../Components/HomeCarousel';
import {InfoCards} from '../Components/InfoCards';

const windowWidth = Dimensions.get('window').width;

export function Home() {
  const GeneralInfoCardData = [
    {id: 1, title: 'जनसंख्या', icon: 'group', textNumber: '12321'},
    {id: 2, title: 'क्षेत्रफल', icon: 'area-chart', textNumber: '12321'},
    {id: 3, title: 'वडा', icon: 'home', textNumber: '12321'},
  ];
  const InfoCardData = [
    {
      id: 1,
      title: 'कार्यक्रम तथा परियोजना',
      icon: 'calendar-multiple',
      textData:
        'उजुरी को कारवाहि प्रक्रिया का विषयमा आख्तियार दुरुपयोग अनुसन्धान ',
    },
    {
      id: 2,
      title: 'सुझाव तथा गुनासो',
      icon: 'chat-plus-outline',
      textData:
        'को समयमा समेत गुनासो व्यबस्थापनको काम सुचारु नेपाल टेलिभिजनको कार्यक्रम:सुशासन सवाल',
    },
    {
      id: 3,
      title: 'समस्या दर्ता',
      icon: 'exclamation-thick',
      textData: 'आयोग र नेपाल टेलिभिजनको कार्यक्रम:सुशासन सवाल',
    },
    {
      id: 4,
      title: 'वडा विवरण',
      icon: 'home',
      textData:
        'का विषयमा आख्तियार दुरुपयोग अनुसन्धान आयोग र नेपाल टेलिभिजनको कार्यक्रम:सुशासन सवाल',
    },
    {
      id: 5,
      title: 'महत्वूर्ण स्थानहरू',
      icon: 'crosshairs-gps',
      textData: ' उजुरी को कारवाहि प्रक्रिया का विषयमा आख्तियार दुरुपयोग ',
    },
    {
      id: 6,
      title: 'आपतकालीन नम्बर',
      icon: 'phone-alert',
      textData: 'को समयमा समेत गुनासो व्यबस्थापनको काम सुचारु छ ।सुशासन सवाल',
    },
    {
      id: 7,
      title: 'हाम्रो बारेमा',
      icon: 'exclamation-thick',
      textData: 'को समयमा समेत गुनासो व्यबस्थापनको काम सुचारु छ ।सुशासन सवाल',
    },
  ];
  return (
    <ScrollView contentContainerStyle={styles.scroller}>
      <HomeCarousel />

      <View style={styles.flexContainer}>
        {GeneralInfoCardData.map(e => (
          <GeneralInfoCard
            title={e.title}
            icon={e.icon}
            id={e.id}
            textNumber={e.textNumber}
          />
        ))}
      </View>

      <Icon name="info-circle" style={styles.text}>
        {'  '}
        सर्वाधिकार: २०७९ नेपाल सरकार, राष्ट्रिय सूचना प्रविधि केन्द्र,
        सिंहदरवार, काठमाडौं
      </Icon>
      <ButtonCovid />
      <View style={styles.Container}>
        {InfoCardData.map(e => (
          <InfoCards
            title={e.title}
            icon={e.icon}
            id={e.id}
            textData={e.textData}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    marginTop: 5,
    width: windowWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  scroller: {
    backgroundColor: '#deeafc',
  },
  text: {
    fontSize: 9,
    fontWeight: '600',
    color: '#2179ff',
    marginLeft: 40,
    marginTop: 5,
  },
  Container: {
    width: windowWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
