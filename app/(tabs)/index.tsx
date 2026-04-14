import { Link } from 'expo-router';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ImageBackground
      source={require('../../assets/images/bob4.webp')} 
      style={styles.background}
      resizeMode="cover"> 
    

    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>🍔 Siri Cascudo</Text>

      <Text style={styles.subtitle}>
        Bem-vindo à Fenda do Biquíni!
      </Text>

      <Text style={styles.description}>
        O lar do lendário Hambúrguer de Siri 🍔
      </Text>

      <Link href="/about" style={styles.button}>
        <Text style={styles.buttonText}>Ver Sobre</Text>
      </Link>

      <Link href="/pedido" style={styles.button}>
        <Text style={styles.buttonText}>Fazer Pedido 🍔</Text>
      </Link>
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
  padding: 20,
  backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)', 
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,

    elevation: 5,

    borderLeftWidth: 6,
    borderLeftColor: '#FFB703', 
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  },
  description: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFB703', // amarelo Bob Esponja
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});