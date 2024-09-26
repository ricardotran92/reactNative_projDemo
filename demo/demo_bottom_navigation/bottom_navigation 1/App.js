// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="FirstPage"
        >
        <Tab.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}  />
        <Tab.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            tabBarLabel: 'Settings',
            title: 'Setting'
          }} />
          <Tab.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            tabBarLabel: 'Orthers',
            title: 'Orthers'
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;