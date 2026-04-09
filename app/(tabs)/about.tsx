import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="information-circle" size={60} color="#E50914" />
        <Text style={styles.title}>Sobre o App</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>O que é?</Text>
        <Text style={styles.infoText}>
          Este é um clone do Netflix feito com React Native e Expo. Um app completo para gerenciar sua lista de filmes e séries!
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Tecnologias</Text>
        <Text style={styles.infoText}>
          React Native • Expo • TypeScript • React Navigation
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 12,
  },
  infoCard: {
    backgroundColor: '#222222',
    borderLeftWidth: 4,
    borderLeftColor: '#E50914',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E50914',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
  },
  featureCard: {
    backgroundColor: '#222222',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E50914',
    marginBottom: 15,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 12,
  },
});