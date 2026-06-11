import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { useState } from 'react';

type Props = {
  imgSource: ImageSource | { uri: string };
  style?: any;
  fallbackSource?: ImageSource | { uri: string };
};

export default function ImageViewer({ imgSource, style, fallbackSource }: Props) {
  const [failed, setFailed] = useState(false);

  const sourceToUse = failed ? (fallbackSource ?? imgSource) : imgSource;

  return (
    <Image
      source={sourceToUse}
      style={[styles.image, style]}
      onError={() => setFailed(true)}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});