import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tên Đăng Nhập</Text>
      <TextInput style={styles.nhaplieu}></TextInput>
      <Text>Mật Khẩu</Text>
      <TextInput style={styles.nhaplieu}></TextInput>
      <Button title='Đăng Nhập'></Button>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nhaplieu: {
    backgroundColor: 'red',
    width: '80%', height:50, borderStyle: 'solid'
  }
});

