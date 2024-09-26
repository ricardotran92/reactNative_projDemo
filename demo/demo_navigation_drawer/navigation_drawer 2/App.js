
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Trang_chu from './pages/Trang_chu';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Drawer.Screen
          name="Trang_chu"
          options={{
            drawerLabel: 'Trang Chủ',
            title: 'Danh Sách Loại Hoa'
          }}
          component={Trang_chu} />
        <Drawer.Screen
          name="SecondPage"
          options={{
            drawerLabel: 'Second page Option',
            title: 'Second Stack'
          }}
          component={SecondPage} />
           <Drawer.Screen
          name="ThirdPage"
          options={{
            drawerLabel: 'Third Page  Option',
            title: 'Third Page Stack'
          }}
          component={ThirdPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;