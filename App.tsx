import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

import { Routes } from './src/router';
import { Background } from './src/components/Background';



SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <Background onLayout={onLayoutRootView}>
        <Routes />
        <StatusBar
          style='light'
          translucent={true}
          backgroundColor='transparent'
        />
      </Background>
    </GestureHandlerRootView>
  );
}