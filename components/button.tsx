import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  theme?: 'primary' | 'netflix';
  width?: number;
  onPress?: () => void;
};

export default function Button({ label, theme, width, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18, width: width ?? 320, height: 68 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress ?? (() => alert('You pressed a button.'))}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  if (theme === 'netflix') {
    return (
      <View style={[styles.buttonContainer, { borderRadius: 24, width: width ?? 320, height: 68, marginBottom: 8, shadowColor: '#E50914', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.4, shadowRadius: 16, elevation: 12 }] }>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? '#B0060F' : '#E50914',
              borderRadius: 24,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              shadowColor: '#fff',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 8,
            },
          ]}
          onPress={onPress ?? (() => alert('Entrar no app!'))}
        >
          <FontAwesome
            name="sign-in"
            size={22}
            color="#fff"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: '#fff', fontWeight: 'bold', fontSize: 20, letterSpacing: 1 }] }>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.buttonContainer, { width: width ?? 320, height: 68 }] }>
      <Pressable style={styles.button} onPress={onPress ?? (() => alert('Você pressionou um botão.'))}> 
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});