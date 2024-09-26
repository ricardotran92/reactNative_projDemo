
import * as React from 'react';
import { Button, View, Text,TextInput, SafeAreaView ,StyleSheet} from 'react-native';
import { useState } from 'react';
const FirstPage = ({ navigation }) => {
    const [userName, setUserName] = useState('');
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Trang Menu</Text>
      <Text style={styles.textStyle}>
          Please insert your name to pass it to second screen
        </Text>
        {/*Input to get the value from the user*/}
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Enter Any value'}
          style={styles.inputStyle}
        />
     <Button title='Trang 2' onPress={()=>
        {navigation.navigate("SecondPage",{tendn:userName})}}></Button>
     <Button title='Trang 3' onPress={()=>{navigation.navigate("ThirdPage")}}></Button>
    </SafeAreaView>
  );
}

export default FirstPage;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
    inputStyle: {
      width: '80%',
      height: 44,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#DBDBD6',
    },
  });