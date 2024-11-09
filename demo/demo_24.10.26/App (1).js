// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import PageButtomTab from './pages/PageButtomTab';


function App() {
  return (
    <NavigationContainer>
     <PageButtomTab/>
    </NavigationContainer>
  );
}

export default App;