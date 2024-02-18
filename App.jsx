import React from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import { sepia, ColorMatrix } from 'react-native-color-matrix-image-filters';

export default function App() {
  const imageSource = {
    uri: 'https://raw.githubusercontent.com/iyegoroff/react-native-color-matrix-image-filters/master/img/parrot.png',
  };
  return (
    <View style={styles.container}>
      <Text>Below this is a normal image!</Text>
      <Image source={imageSource} style={styles.image} resizeMode='cover' />
      <Text>Below this is a ColorMatrix-based image!</Text>
      <View style={styles.imageCard}>
        <ColorMatrix
          matrix={sepia()}
          image={<Image source={imageSource} style={styles.image} resizeMode='cover' />}
        />
      </View>
    </View>
  );
}

const CARD_SIZE = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCard: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.15,
  },
  image: {
    width: CARD_SIZE,
    height: CARD_SIZE,
  },
});
