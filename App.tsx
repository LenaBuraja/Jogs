import React from 'react';
import RootNavigator from './src/navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
