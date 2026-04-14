import { Link } from 'expo-router';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ImageBackground
          source={require('../../assets/images/bob3.webp')} 
          style={styles.background}
          resizeMode="cover">

      <View style={styles.container}>
        
        <View style={styles.card}>
        <Text style={styles.title}>🍔 Siri Cascudo</Text>

        <Text style={styles.subtitle}>
          O melhor restaurante da Fenda do Biquíni!
        </Text>

        <Text style={styles.description}>
          Aqui você encontra o famoso Hambúrguer de Siri,
          preparado com uma receita 
          secreta que só o Seu Siriguejo conhece!
        </Text>

        <Text style={styles.footer}>
          🌊 Venha experimentar essa delícia do fundo do mar!
        </Text>

        <Link href="/" style={styles.button}>
              <Text style={styles.buttonText}>Voltar para a página inicial</Text>
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


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D62828', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#000000', // azul mais escuro
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
  footer: {
    fontSize: 14,
    color: '#0077B6',
    fontStyle: 'italic',
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