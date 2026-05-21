import { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

import ImageViewer from './componentes/imageViewer';

import button from './componentes/button'; 

const PlaceholderImage = require('../../assets/images/bob4.webp');
const BackgroundImage = require('../../assets/images/bob.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], 
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Nenhuma imagem selecionada.');
    }
  }

  return (
    <ImageBackground 
      source={BackgroundImage} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}> 
        <View style={styles.container}>
          
          
          <View style={styles.imageContainer}>
            <ImageViewer 
              imgSource={PlaceholderImage} 
              selectedImage={selectedImage} 
            />
          </View>
          
          <View style={styles.card}>
            <Text style={styles.title}>🍔 Siri Cascudo</Text>

            <Text style={styles.subtitle}>
              Bem-vindo à Fenda do Biquíni!
            </Text>

            <Text style={styles.description}>
              O lar do lendário Hambúrguer de Siri 🍔
            </Text>

            
            <Pressable style={styles.buttonAction} onPress={pickImageAsync}>
              <Text style={styles.buttonText}>📸 Mudar Foto</Text>
            </Pressable>
            
            <Link href="/about" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Ver Sobre</Text>
              </Pressable>
            </Link>

            <Link href="/pedido" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Fazer Pedido 🍔</Text>
              </Pressable>
            </Link>
          </View>

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  imageContainer: {
    width: 150,      
    height: 150,     
    marginBottom: 20, 
    borderRadius: 75, 
    overflow: 'hidden', 
    elevation: 5,     
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)', 
    borderRadius: 15,
    padding: 20,
    width: '100%', 
    alignItems: 'center', 
    elevation: 5,
    borderLeftWidth: 6,
    borderLeftColor: '#FFB703', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D62828', // vermelho Siriguejo
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#161212',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20, // Diminuí um pouco para caber o novo botão
    textAlign: 'center',
  },
  // Estilo específico para o botão de ação (Mudar foto) para dar um leve destaque
  buttonAction: {
    backgroundColor: '#8ECAE6', // Um azul clarinho para diferenciar do amarelo
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%', 
    alignItems: 'center',
    marginBottom: 15, 
  },
  button: {
    backgroundColor: '#FFB703', // amarelo Bob Esponja
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%', 
    alignItems: 'center',
    marginBottom: 12, 
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});