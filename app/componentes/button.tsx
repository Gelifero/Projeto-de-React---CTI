import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
  // ADIÇÃO: Permite que o botão receba uma função de clique do componente pai
  onPress?: () => void; 
}; 

// ADIÇÃO: Recebendo o onPress aqui nos parâmetros
export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View 
                style={[
                    styles.buttonContainer,
                    { borderWidth: 4, borderColor: '#FFB703', borderRadius: 18 }, 
                ]}>
                <Pressable 
                    style={[styles.button, { backgroundColor: '#FFB703' }]}
                    // CORREÇÃO: Usando a função dinâmica em vez do alert fixo
                    onPress={onPress}
                >
                    <FontAwesome name="picture-o" size={18} color="#023E8A" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#023E8A' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            {/* CORREÇÃO: Usando a função dinâmica em vez do alert fixo */}
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320, 
        height: 50,
        marginHorizontal: 20,
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 2
    },
    button: {
        borderRadius: 12,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonIcon: {
        paddingRight: 8,
    },
});
    