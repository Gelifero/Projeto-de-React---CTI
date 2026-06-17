import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFB703',
        tabBarInactiveTintColor: '#023E8A',

        headerStyle: {
          backgroundColor: '#6effcf',
        },
        headerShadowVisible: false,
        headerTintColor: '#D62828',

        tabBarStyle: {
          backgroundColor: '#6effcf',
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerTitle: '🦀 Restaurante Siri Cascudo 🦀',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          headerTitle: '🌊 Sobre o Restaurante 🌊',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Cardápio',
          headerTitle: '🍔 Cardápio do Cascudo 🍔',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'list' : 'list-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      
      <Tabs.Screen
        name="pedido"
        options={{
          title: 'Pedidos',
          headerTitle: ' Pedidos da Fenda do Biquíni ',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'restaurant' : 'restaurant-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="episodios"
        options={{
          title: 'TV',
          headerTitle: '📺 Assista no Siri Cascudo',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'tv' : 'tv-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />


      <Tabs.Screen
        name="imagePicker"
        options={{
          title: 'Foto',
          headerTitle: '📸 Câmera do Cascudo',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'camera' : 'camera-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}