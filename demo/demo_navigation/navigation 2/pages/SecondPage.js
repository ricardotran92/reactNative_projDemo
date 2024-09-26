
import { Button,TextInput, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation,route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Trang 2</Text>
      <Text>Chào Bạn :{route.params.tendn}</Text>
     
       <Button title='Trang Chủ' onPress={()=>{navigation.goBack();}}></Button>
        <Button title='Trang 3' onPress={()=>{navigation.navigate("ThirdPage")}}></Button>
    </SafeAreaView>
  );
}

export default SecondPage;