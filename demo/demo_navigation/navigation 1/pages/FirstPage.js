
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Trang Menu</Text>
     <Button title='Trang 2' onPress={()=>{navigation.navigate("SecondPage")}}></Button>
     <Button title='Trang 3' onPress={()=>{navigation.navigate("ThirdPage")}}></Button>
    </SafeAreaView>
  );
}

export default FirstPage;