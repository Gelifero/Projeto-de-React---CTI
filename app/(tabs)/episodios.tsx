import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';

export default function Episodios() {
  const [episodios, setEpisodios] = useState([]);
  const [carregando, setCarregando] = useState(true);


  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/713/episodes')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setEpisodios(dados.reverse());
        setCarregando(false);
      })
      .catch((erro) => {
        console.error("Erro ao buscar a API:", erro);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator size="large" color="#D62828" />
        <Text style={styles.textoCarregando}>Sintonizando a TV da Fenda do Biquíni...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📺 Episódios na TV</Text>
      
      <FlatList
        data={episodios}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image?.medium && (
              <Image 
                source={{ uri: item.image.medium }} 
                style={styles.imagem} 
                resizeMode="cover"
              />
            )}
            
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.info}>Temporada {item.season} | Episódio {item.number}</Text>
              <Text style={styles.data}>Lançamento: {item.airdate}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#8ECAE6', 
    padding: 16 
  },
  centralizado: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#8ECAE6' 
  },
  textoCarregando: {
    marginTop: 10,
    color: '#023E8A',
    fontWeight: 'bold',
    fontSize: 16
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#D62828', 
    marginBottom: 16, 
    textAlign: 'center' 
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 15,
    marginBottom: 16,
    borderLeftWidth: 6,
    borderLeftColor: '#FFB703',
    elevation: 4,
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: 150,
  },
  infoContainer: {
    padding: 16,
  },
  name: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#023E8A', 
    marginBottom: 4 
  },
  info: { 
    fontSize: 15, 
    color: '#333', 
    fontWeight: 'bold'
  },
  data: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
    fontStyle: 'italic'
  }
});