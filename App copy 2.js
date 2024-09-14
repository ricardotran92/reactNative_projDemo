import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [hoten, ganhoten] = useState('');
  return (
    <View style={styles.container}>
      <Text>Nhập Họ Tên</Text>
      <TextInput style={styles.nhaplieu} value={hoten} onChangeText={ganhoten}></TextInput>
      <Button title='Chào' onPress={() => {Alert.alert('Chào Bạn : ' + hoten)}}></Button>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // 'center'
    marginTop: '20'
  },

  nhaplieu: {
    backgroundColor: 'azure',
    width: '80%', height:50, borderStyle: 'solid', bordercolor: 'black'
  }
});

