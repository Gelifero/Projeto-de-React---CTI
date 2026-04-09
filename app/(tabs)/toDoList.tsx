import { useTarefas } from '@/hooks/useTarefas';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefas, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Minha Lista para Assistir</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite um filme ou série"
                    placeholderTextColor="#CCCCCC"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <TouchableOpacity style={styles.addButton} onPress={adicionarTarefas}>
                    <Text style={styles.addButtonText}>Adicionar à Lista</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Ionicons name="trash" size={20} color="#E50914" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000000' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFFFFF' },
  inputContainer: { flexDirection: 'row', marginBottom: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#E50914', backgroundColor: '#333333', color: '#FFFFFF', padding: 10, borderRadius: 5, marginRight: 10 },
  addButton: { backgroundColor: '#E50914', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, justifyContent: 'center' },
  addButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  tarefaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#222222',
    padding: 15,
    marginBottom: 5,
    borderRadius: 5,
  },
  tarefaTexto: { fontSize: 16, color: '#FFFFFF' },
});