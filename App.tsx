import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MockStack } from './src/stacks/mock';
import { CalendarStack } from './src/stacks/calendar';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useLayoutEffect } from 'react';
import { loadConfiguration } from './FoundationConfig'
import { useFonts, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Image } from 'react-native';
import { Colors, Text } from 'react-native-ui-lib';

SplashScreen.preventAutoHideAsync();

const { Navigator, Screen} = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useLayoutEffect(() => {
    loadConfiguration()
  }, [])

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplash()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Navigator 
        screenOptions={{
          headerShown: false,
          headerTintColor: 'white',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: Colors.blueGray400,
          tabBarStyle: {
            backgroundColor: Colors.tabBar,
            elevation: 0,
            shadowOpacity: 0,
            borderTopWidth: 0,
          },
        }}
        initialRouteName='Calendar'
      >
        <Screen 
          name="Mock1" 
          component={MockStack} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <Image height={24} width={24} tintColor={color} source={require('./assets/home.png')} />
            ),
            tabBarLabel: ({ focused }) => focused ? <Text navigationLabel>Home</Text> : null 
          }}
        />
        <Screen
          name="Calendar"
          component={CalendarStack}
          options={{ 
            tabBarIcon: ({ color }) => (
              <Image height={24} width={24} tintColor={color} source={require('./assets/calendar.png')} />
            ),
            tabBarLabel: ({ focused }) => focused ? <Text navigationLabel>Calendar</Text> : null 
          }}
        />
        <Screen
          name="Mock2"
          component={MockStack}
          options={{ 
            tabBarIcon: ({ color }) => (
              <Image height={24} width={24} tintColor={color} source={require('./assets/shop.png')} />
            ),
            tabBarLabel: ({ focused }) => focused ? <Text navigationLabel>Shop</Text> : null  
          }}
        />
        <Screen
          name="Mock3"
          component={MockStack}
          options={{ 
            tabBarIcon: ({ color }) => (
              <Image height={24} width={24} tintColor={color} source={require('./assets/message.png')} />
            ),
            tabBarLabel: ({ focused }) => focused ? <Text navigationLabel>Shop</Text> : null 
          }}
        />
        <Screen
          name="Mock4"
          component={MockStack}
          options={{ 
            tabBarIcon: ({ color }) => (
              <Image height={24} width={24} tintColor={color} source={require('./assets/more.png')} />
            ),
            tabBarLabel: ({ focused }) => focused ? <Text navigationLabel>More</Text> : null  
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
