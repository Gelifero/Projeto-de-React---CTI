import { View, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';

const BackgroundImage = require('../../assets/images/bob.jpg');

export default function Index() {
  return (
    <ImageBackground 
      source={BackgroundImage} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}> 
        <View style={styles.container}>
          
          <View style={styles.card}>
            <Text style={styles.title}>🍔 Siri Cascudo</Text>
            <Text style={styles.subtitle}>Bem-vindo à Fenda do Biquíni!</Text>
            <Text style={styles.description}>O lar do lendário Hambúrguer de Siri 🍔</Text>
            
            {/* NOVO: Link para a sua página de Image Picker / Stickers */}
            <Link href="/imagePicker" asChild>
              <Pressable style={styles.buttonAction}>
                <Text style={styles.buttonText}>✨ Personalizar Foto</Text>
              </Pressable>
            </Link>

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
  background: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)', 
    borderRadius: 15, padding: 20, width: '100%', 
    alignItems: 'center', elevation: 5,
    borderLeftWidth: 6, borderLeftColor: '#FFB703', 
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#D62828', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#161212', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: '#000000', marginBottom: 20, textAlign: 'center' },
  buttonAction: { backgroundColor: '#8ECAE6', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10, width: '100%', alignItems: 'center', marginBottom: 15 },
  button: { backgroundColor: '#FFB703', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10, width: '100%', alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
});