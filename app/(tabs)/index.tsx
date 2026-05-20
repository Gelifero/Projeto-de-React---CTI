
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


import Button from '@/components/button';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/netflixLogo.png');


export default function Index() {
  const { width } = Dimensions.get('window');
  const logoWidth = Math.min(width * 0.7, 320);
  const buttonWidth = Math.min(width * 0.85, 340);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  async function pickImage() {
    // Solicita permissão
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'Você precisa permitir acesso às fotos para escolher uma imagem.');
      return;
    }
    // Abre o seletor
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.logoContainer, { width: logoWidth, height: logoWidth * 1.3, borderRadius: logoWidth * 0.18 }] }>
          <ImageViewer imgSource={selectedImage ? { uri: selectedImage } : PlaceholderImage} style={{ width: logoWidth, height: logoWidth * 1.3, borderRadius: logoWidth * 0.18 }} />
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Seu app de filmes e séries</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>Explore nosso catálogo, crie suas listas e descubra novos conteúdos!</Text>
        </View>
        <View style={styles.footerContainer}>
          <Button theme="netflix" label={selectedImage ? "Trocar foto" : "Carregar uma foto"} width={buttonWidth} onPress={pickImage} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    width: '100%',
  },
  logoContainer: {
    marginBottom: 24,
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 16,
    backgroundColor: '#111',
    padding: 8,
    // Removida a borda vermelha
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E50914',
    marginTop: 12,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1.2,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#CCCCCC',
    marginTop: 8,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#222',
    borderLeftWidth: 4,
    borderLeftColor: '#E50914',
    padding: 16,
    borderRadius: 12,
    marginBottom: 28,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    alignSelf: 'center',
  },
  cardText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
  },
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 14,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
});