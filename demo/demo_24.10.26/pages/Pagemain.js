import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagecategories from './Pagecategories';
import Pageproducts from './Pageproducts';
const Stack = createNativeStackNavigator();
export default function Pagemain() {
  return (
    <Stack.Navigator initialRouteName="Pagecategories">
        <Stack.Screen
          name="Pagecategories"
          component={Pagecategories}
          options={{
            title: 'Categories', //Set Header Title
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
          name="Pageproducts"
          component={Pageproducts}
          options={{
            title: 'Products', //Set Header Title
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