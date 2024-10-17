import { StyleSheet,View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Pagecategories from "./pages/Pagecategories";
import Pageproducts from './pages/Pageproducts';
import Pagedetailproducts from './pages/Pagedetailproducts';
const App = () => {
  return (
    <NavigationContainer>
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
      <Stack.Screen
        name="Pagedetailproducts"
        component={Pagedetailproducts}
        options={{
          title: 'Products Detail', //Set Header Title
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
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  }
});

export default App;