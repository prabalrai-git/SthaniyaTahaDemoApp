// temporary used only for routing purposes

import {View, Text} from 'react-native';
import React from 'react';

const CommonScreen = ({route}) => {
  const {title} = route.params;
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          marginTop: 20,
          color: 'black',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default CommonScreen;
