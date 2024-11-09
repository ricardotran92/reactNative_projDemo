
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pagemain from './Pagemain';
import Pagelogin from './Pagelogin';
const Tab = createBottomTabNavigator();

function PageButtomTab() {
  return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            } else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
        <Tab.Screen
          name="HomeStack"
          component={Pagemain}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={Pagelogin}
          options={{
            tabBarLabel: 'Login',
            title: 'Login'
          }} />
      </Tab.Navigator>
   
  );
}
export default PageButtomTab;