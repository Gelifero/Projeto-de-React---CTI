import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function Pedido() {
  const [total, setTotal] = useState(0);
  const [pedido, setPedido] = useState([]);

  const adicionarItem = (nome, valor) => {
    setPedido([...pedido, nome]);
    setTotal(total + valor);
  };

  const limpar = () => {
    setPedido([]);
    setTotal(0);
  };

  return (

    <ImageBackground
    source={require('../../assets/images/bob4.webp')}
    style={styles.background}
    resizeMode="cover">

    <View style={styles.container}>
      
      
      <View style={styles.card}>
        
        <Text style={styles.titulo}>🍔 Siri Cascudo</Text>
        <Text style={styles.subtitulo}>
          Monte seu pedido na Fenda do Biquíni
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => adicionarItem("Hambúrguer de Siri", 15)}
        >
          <Text style={styles.texto}>🍔 Hambúrguer de Siri - R$15</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => adicionarItem("Combo do Bob", 22)}
        >
          <Text style={styles.texto}>🧽 Combo do Bob - R$22</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => adicionarItem("Especial do Sr. Siriguejo", 30)}
        >
          <Text style={styles.texto}>🦀 Especial do Sr. Siriguejo - R$30</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => adicionarItem("Lanche do Lula Molusco", 12)}
        >
          <Text style={styles.texto}>🐙 Lanche do Lula Molusco - R$12</Text>
        </TouchableOpacity>

        <View style={styles.lista}>
          <Text style={styles.listaTitulo}>📋 Seu Pedido:</Text>
          {pedido.map((item, index) => (
            <Text key={index} style={styles.item}>
              • {item}
            </Text>
          ))}
        </View>

        <Text style={styles.total}>💰 Total: R$ {total}</Text>

        <TouchableOpacity style={styles.limpar} onPress={limpar}>
          <Text style={styles.textoLimpar}>Cancelar Pedido</Text>
        </TouchableOpacity>

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
  padding: 20,
  width: '100%',
  elevation: 5,
  borderLeftWidth: 6,
  borderLeftColor: '#FFB703',
},

titulo: {
  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#D62828',
},

subtitulo: {
  textAlign: 'center',
  marginBottom: 15,
  color: '#001F54',
},

botao: {
  backgroundColor: '#FFB703',
  padding: 12,
  borderRadius: 10,
  marginBottom: 8,
},

texto: {
  textAlign: 'center',
  fontWeight: 'bold',
},

lista: {
  marginTop: 15,
},

listaTitulo: {
  fontWeight: 'bold',
},

item: {
  color: '#001F54',
},

total: {
  marginTop: 15,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
},

limpar: {
  marginTop: 15,
  backgroundColor: '#D62828',
  padding: 10,
  borderRadius: 10,
},

textoLimpar: {
  color: '#fff',
  textAlign: 'center',
  fontWeight: 'bold',
},
})