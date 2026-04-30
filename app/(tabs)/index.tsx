import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

import Button from '@/components/button';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <><View style={styles.container}>
      <View style={styles.banner}>
        <Ionicons name="play-circle" size={50} color="#E50914" />
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Seu app de filmes e séries</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Explore nosso catálogo, crie suas listas e descubra novos conteúdos!</Text>
      </View>
    </View><View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" />
          <Button label="Use this photo" />
        </View>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  banner: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#222222',
    borderLeftWidth: 4,
    borderLeftColor: '#E50914',
    padding: 20,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});