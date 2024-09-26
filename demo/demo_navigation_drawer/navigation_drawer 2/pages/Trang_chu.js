
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChitietHoa from '../pages/ChitietHoa'
import Trangloaihoa from '../pages/Trangloaihoa';
import DsHoa from '../pages/DsHoa';
const Stack = createNativeStackNavigator()

export default function Trang_chu() {
  return (
    <Stack.Navigator initialRouteName="Trangloaihoa">
        <Stack.Screen
          name="Trangloaihoa"
          component={Trangloaihoa}
          options={{
            title: 'Loại Hoa', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="DsHoa"
          component={DsHoa}
          options={{
            title: 'Danh Sách Hoa', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }} 
        />
        <Stack.Screen
          name="ChitietHoa"
          component={ChitietHoa}
          options={{
            title: 'Chi Tiết Hoa', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>

  )
}