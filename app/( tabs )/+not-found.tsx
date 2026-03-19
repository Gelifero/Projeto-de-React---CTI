import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
  return (
    <>
        <Stack.Screen options={{title: 'Não foi encontrada'}}/>
            <View style={styles.container}>
                <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
                <Link href="/" style={styles.button}>Volte para a tela inicial</Link>
            </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});