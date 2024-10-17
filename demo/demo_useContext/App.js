import 'react-native-gesture-handler';
import { NavigationContainer } 
from '@react-navigation/native';
import { createDrawerNavigator } 
from '@react-navigation/drawer';
import Trangchu from './pages/Trangchu';
import Spage from './pages/Spage';
import Tpage from './pages/Tpage';
import UserContext from './pages/UserContext';
import { useState } from 'react';
const Drawer = createDrawerNavigator();
function App() {
const [user,setuser]=useState({username:""})
  return (
    <UserContext.Provider value={{ user, setuser}}>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Trangchu"
          options={{drawerLabel: 'Trang Chủ', title: 'Trang Chủ'}}
          component={Trangchu} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Trang Người Dùng', title: 'Người Dùng'   }}
          component={Spage} />
           <Drawer.Screen
          name="TdPage"
          options={{   drawerLabel: 'Trang Chi Tiết',    title: 'Chi Tiết'   }}
          component={Tpage} />
      </Drawer.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;