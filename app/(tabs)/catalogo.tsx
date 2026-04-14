import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Filme {
  id: string;
  titulo: string;
  ano: string;
  imagem: string;
  avaliacao: number;
}

interface Categoria {
  id: string;
  nome: string;
  filmes: Filme[];
}

const dadosCatalogo: Categoria[] = [
  {
    id: '1',
    nome: 'Ação',
    filmes: [
      { id: '1', titulo: 'Como Treinar o Seu Dragão', ano: '2010', imagem: 'https://www.papodecinema.com.br/wp-content/uploads/2012/02/20181217-como-treinar-o-seu-dragao-2578-poster.webp', avaliacao: 4.5 },
      { id: '2', titulo: 'Vingadores', ano: '2014', imagem: 'https://m.media-amazon.com/images/I/71aLwVNGplL._AC_UF894,1000_QL80_.jpg', avaliacao: 4.8 },
    ],
  },
  {
    id: '2',
    nome: 'Comédia',
    filmes: [
      { id: '3', titulo: 'O máscara', ano: '2013', imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/90/86/15/20116705.jpg', avaliacao: 4.2 },
      { id: '4', titulo: 'Deadpool', ano: '2016', imagem: 'https://lumiere-a.akamaihd.net/v1/images/image_8c4aa72b.jpeg', avaliacao: 4.7 },
    ],
  },
  {
    id: '3',
    nome: 'Terror',
    filmes: [
      { id: '5', titulo: 'O Chamado', ano: '1972', imagem: 'https://br.web.img2.acsta.net/pictures/17/01/05/22/10/519378.jpg', avaliacao: 4.3 },
      { id: '6', titulo: 'Longlegs', ano: '2025', imagem: 'https://ingresso-a.akamaihd.net/prd/img/movie/longlegs-vinculo-mortal/3b62f39c-8b5c-42a2-925a-8126749d8466.webp', avaliacao: 4.6 },
    ],
  },
];

export default function CatalogoScreen() {
  const renderCategoria = ({ item }: { item: Categoria }) => (
    <View style={styles.categoriaContainer}>
      <Text style={styles.categoriaTitulo}>{item.nome}</Text>
      <FlatList
        data={item.filmes}
        keyExtractor={(filme) => filme.id}
        renderItem={renderFilme}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filmesList}
      />
    </View>
  );

  const renderEstrelas = (avaliacao: number) => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(avaliacao)) {
        estrelas.push(
          <Ionicons key={i} name="star" size={12} color="#FFD700" />
        );
      } else if (i - avaliacao < 1) {
        estrelas.push(
          <Ionicons key={i} name="star-half" size={12} color="#FFD700" />
        );
      } else {
        estrelas.push(
          <Ionicons key={i} name="star-outline" size={12} color="#FFD700" />
        );
      }
    }
    return estrelas;
  };

  const renderFilme = ({ item }: { item: Filme }) => (
    <TouchableOpacity style={styles.filmeContainer}>
      <Image source={{ uri: item.imagem }} style={styles.filmeImagem} />
      <View style={styles.filmeInfo}>
        <Text style={styles.filmeTitulo}>{item.titulo}</Text>
        <View style={styles.avaliacaoContainer}>
          {renderEstrelas(item.avaliacao)}
        </View>
        <Text style={styles.filmeAno}>{item.ano}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo Netflix</Text>
      <FlatList
        data={dadosCatalogo}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoria}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000', padding: 10 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center', marginBottom: 20 },
  categoriaContainer: { marginBottom: 20 },
  categoriaTitulo: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 10 },
  filmesList: { paddingLeft: 10 },
  filmeContainer: { marginRight: 15, width: 120 },
  filmeImagem: { width: '100%', height: 150, borderRadius: 5 },
  filmeInfo: { marginTop: 8 },
  filmeTitulo: { fontSize: 12, color: '#FFFFFF', fontWeight: 'bold' },
  avaliacaoContainer: { flexDirection: 'row', marginTop: 4, marginBottom: 4 },
  filmeAno: { fontSize: 11, color: '#CCCCCC' },
});