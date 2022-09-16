import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../Screens/Home';
import {Services} from '../Screens/Services';
import {Menu} from '../Screens/Menu';
import {News} from '../Screens/News';
import {Text} from 'react-native';
import {FooterNavigation} from '../Components/FooterNavigation';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
      <FooterNavigation />
    </>
  );
}
