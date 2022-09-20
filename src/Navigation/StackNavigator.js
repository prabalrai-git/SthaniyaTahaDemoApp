import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../Screens/Home';
import {Services} from '../Screens/Services';
import {News} from '../Screens/News';
import {Text} from 'react-native';
import {FooterNavigation} from '../Components/FooterNavigation';
import CommonHeader from '../Components/CommonHeader';
import CovidInfo from '../Screens/CovidInfo';
import CommonScreen from '../Screens/CommonScreen';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <CommonHeader />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Services"
          component={Services}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="covidInfo"
          component={CovidInfo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="commonScreen"
          component={CommonScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <FooterNavigation />
    </>
  );
}
