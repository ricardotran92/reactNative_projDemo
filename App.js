//App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { initDatabase } from './src/database/database';
import { useEffect } from 'react';
import { SettingsProvider } from './src/context/SettingsContext';
import MainTab from './src/Nav/MainTab';

//<MainTab/> <AppNav/>
export default function App() {
  useEffect(() => {
    initDatabase(); // Initialize database on app start
  }, []);

  return (
      <SettingsProvider>
        <NavigationContainer>
          <MainTab/>
        </NavigationContainer>
      </SettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
