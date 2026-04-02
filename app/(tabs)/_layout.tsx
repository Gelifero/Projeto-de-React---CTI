import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function TabLayout() {
    return(
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#ff0000',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
        }}
        >

        <Tabs.Screen name="index"
         options={{title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Fontisto name="netflix" size={24} color="red" />
          ),
          }}/>

        <Tabs.Screen name="about" options={{title: 'About',
          tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
        />
      </Tabs>  
    );
}