import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
};

export default function Button({ label, theme }: Props) {
    if (theme === 'primary') {
        return (
            <View 
                style={[
                    styles.buttonContainer,
                    { borderWidth: 4, borderColor: '#FFB703', borderRadius: 18 }, 
                ]}>
                <Pressable 
                    style={[styles.button, { backgroundColor: '#FFB703' }]}
                    // CORREÇÃO: Faltava o sinal de igual '=' depois do onPress
                    onPress={() => alert('Botão Primário Pressionado!')}
                >
                    <FontAwesome name="picture-o" size={18} color="#023E8A" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, { color: '#023E8A' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        // CORREÇÃO: A tag <View> tem que começar com 'V' maiúsculo
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Botão Pressionado!')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320, // CORREÇÃO: Faltava os dois pontos ':' depois do width
        height: 50,
        marginHorizontal: 20,
        alignItems: 'center', // CORREÇÃO: Estava escrito 'alighnItems'
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
    