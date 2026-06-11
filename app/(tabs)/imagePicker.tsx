import { useState, useRef } from 'react'; // Adicionado useRef
import { View, StyleSheet, Platform } from 'react-native'; // Adicionado Platform
import * as ImagePicker from 'expo-image-picker';
import { type ImageSource } from 'expo-image';

// Novas bibliotecas para salvar a imagem e ler gestos
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Importe seus componentes personalizados (Mantive com a inicial Maiúscula pra não dar erro!)
import ImageViewer from '../componentes/imageViewer'; 
import Button from '../componentes/button'; 
import IconButton from '../componentes/IconButton';
import CircleButton from '../componentes/CircleButton';
import EmojiPicker from '../componentes/EmojiPicker';
import EmojiList from '../componentes/EmojiList';
import EmojiSticker from '../componentes/EmojiSticker';

const PlaceholderImage = require('../../assets/images/bob4.webp');

export default function ImagePickerScreen() {
  const imageRef = useRef(null); // Referência para a "câmera" tirar print
  const [status, requestPermission] = MediaLibrary.usePermissions(); // Estado da permissão

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], 
      allowsEditing: true,
      quality: 1,
    });

    // Pede permissão para acessar a galeria se o usuário ainda não deu
    if (status === null) {
      requestPermission();
    }

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true); 
    } else {
      alert('Nenhuma imagem selecionada.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false); 
    setPickedEmoji(undefined); // Limpa o adesivo quando reseta
  };

  const onAddSticker = () => {
    setIsModalVisible(true); 
  };

  const onModalClose = () => {
    setIsModalVisible(false); 
  };

  // Função mágica de salvar a foto criada pela professora
  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Foto salva com sucesso na galeria! 🎉');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        if (imageRef.current) {
          const dataUrl = await domtoimage.toJpeg(imageRef.current, {
            quality: 0.95,
            width: 320,
            height: 440,
          });

          let link = document.createElement('a');
          link.download = 'minha-foto-siri-cascudo.jpeg';
          link.href = dataUrl;
          link.click();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    // Trocamos a View principal pelo GestureHandlerRootView
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Tudo dentro dessa View com 'ref' será salvo na imagem final */}
        <View ref={imageRef} collapsable={false}>
          <ImageViewer 
            imgSource={PlaceholderImage} 
            selectedImage={selectedImage} 
          />
          {pickedEmoji && <EmojiSticker imageSize={60} stickerSource={pickedEmoji} />}
        </View>
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolher uma foto" onPress={pickImageAsync} />
          <Button label="Usar esta foto" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    paddingTop: 50,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
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