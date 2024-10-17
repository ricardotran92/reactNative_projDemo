// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Trang_chu from './pages/Trang_chu';
const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Trang_chu"
        >
        <Tab.Screen
          name="Trang_chu"
          component={Trang_chu}
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