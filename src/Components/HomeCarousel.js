// import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SimpleCarousel, Banner} from 'react-native-simple-banner-carousel';

function HomeCarousel() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '102%',
          backgroundColor: '#fff',
          padding: 2,
        }}>
        <SimpleCarousel
          data={[
            {
              title: 'Hokkaido',
              source: require('../Assets/img/People.jpg'),
            },
            {
              title: 'Tokyo',
              source: require('../Assets/img/black.jpg'),
            },
            {
              title: 'Osaka',
              source: require('../Assets/img/shop.jpg'),
            },
            {
              title: 'Kyoto',
              source: require('../Assets/img/temple.jpg'),
            },
            {
              title: 'Shimane',
              source: require('../Assets/img/temple2.jpg'),
            },
          ]}
          renderItem={(props, i, width) => {
            return (
              <Banner
                id={`${props.title}_${i}`}
                source={props.source}
                width={width}
                onPress={id => console.log(`${id} was tapped.`)}
              />
            );
          }}
        />
      </View>
      {/* <StatusBar translucent={true} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeCarousel;
