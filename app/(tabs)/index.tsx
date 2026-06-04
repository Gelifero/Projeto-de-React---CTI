import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Dimensions, Alert, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/iconButton';
import CircleButton from '@/components/circleButton';
import EmojiPicker from '@/components/emojiPicker';
import EmojiList from '@/components/emojiList';
// NOVO IMPORT: Componente do sticker
import EmojiSticker from '@/components/emojiSticker';

const PlaceholderImage = require('@/assets/images/netflixLogo.png');

export default function Index() {
  const { width } = Dimensions.get('window');
  const logoWidth = Math.min(width * 0.7, 320);
  const buttonWidth = Math.min(width * 0.85, 340);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(null);

  async function pickImage() {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'Você precisa permitir acesso às fotos para escolher uma imagem.');
      return;
    }
    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
        setShowAppOptions(true);
      }
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(null);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // implementaremos isso mais tarde
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.logoContainer, { width: logoWidth, height: logoWidth * 1.3, borderRadius: logoWidth * 0.18 }] }>
          <ImageViewer imgSource={selectedImage ? { uri: selectedImage } : PlaceholderImage} style={{ width: logoWidth, height: logoWidth * 1.3, borderRadius: logoWidth * 0.18 }} />
          
          {/* NOVO CÓDIGO: Renderiza o sticker se um emoji tiver sido escolhido */}
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
        
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Seu app de filmes e séries</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardText}>Explore nosso catálogo, crie suas listas e descubra novos conteúdos!</Text>
        </View>

        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Resetar" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Salvar" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="netflix" label="Escolher uma foto" width={buttonWidth} onPress={pickImage} />
            <Button label="Usar esta foto" width={buttonWidth} onPress={() => setShowAppOptions(true)} />
          </View>
        )}

        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});