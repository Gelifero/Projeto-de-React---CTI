import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { useTarefas } from '@/hooks/useTarefas'; 

export default function App() {
  const {
    tarefas,
    novaTarefa,
    setNovaTarefa,
    adicionarTarefas,
    removerTarefa
  } = useTarefas();

  return (

    <ImageBackground
        source={require('../../assets/images/bob.jpg')}
        style={styles.background}
        resizeMode="cover">
    <View style={styles.container}>
      <Text style={styles.titulo}>🍔 Cardápio do Siri Cascudo</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item do cardápio"
          placeholderTextColor="#023E8A"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        <TouchableOpacity style={styles.botao} onPress={adicionarTarefas}>
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTexto}>🍔 {item.texto}</Text>

            <TouchableOpacity onPress={() => removerTarefa(item.id)}>
              <Text style={styles.remover}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#D62828', // vermelho Siriguejo
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#023E8A',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#CAF0F8',
  },

  botao: {
    backgroundColor: '#FFB703', // amarelo Bob Esponja
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 10,
  },

  botaoTexto: {
    fontWeight: 'bold',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  itemTexto: {
    fontSize: 16,
    color: '#001F54',
  },

  remover: {
    fontSize: 18,
    color: '#D62828',
  },
});
