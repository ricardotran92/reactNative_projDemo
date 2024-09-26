
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Trang 2</Text>
       <Button title='Trang Chủ' onPress={()=>{navigation.goBack();}}></Button>
        <Button title='Trang 3' onPress={()=>{navigation.navigate("ThirdPage")}}></Button>
    </SafeAreaView>
  );
}

export default SecondPage;