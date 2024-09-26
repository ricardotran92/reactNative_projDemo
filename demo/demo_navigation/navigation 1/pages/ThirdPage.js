
import { Button, View, Text, SafeAreaView } from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Trang 3</Text>
      <Button title='Trang Chủ' onPress={()=>{navigation.navigate("FirstPage")}}/>
      <Button title='Về trang Trước' onPress={()=>{navigation.goBack();}}/>
    </SafeAreaView>
  );
}

export default ThirdPage;