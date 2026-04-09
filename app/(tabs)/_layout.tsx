import { Fontisto, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

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
        <Tabs.Screen name="search" options={{title: 'Buscar',
          tabBarIcon: ({color, focused}) => (<Ionicons name="search" color="red" size={24}/>
          ),
        }}
        />
        <Tabs.Screen name="favoritos" options={{title: 'Favoritos',
          tabBarIcon: ({color, focused}) => (<Ionicons name="heart" color="red" size={24}/>
          ),
        }}
        />
        <Tabs.Screen name="catalogo" options={{title: 'Catálogo',
          tabBarIcon: ({color, focused}) => (<Ionicons name="grid" color="red" size={24}/>
          ),
        }}
        />
        <Tabs.Screen name="toDoList" options={{title: 'Lista do que eu quero assistir',
          tabBarIcon: ({color, focused}) => (<Ionicons name="play" color="red" size={24}/>
          ),
        }}
        />
      </Tabs>
    );
}