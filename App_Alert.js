// import { StatusBar } from 'expo-status-bar';
// import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Button, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const Chon1 = () => {
    alert('Chào');
  }
  const DongY = () => {
    alert('Đồng ý');
  }
  const KhongDongY = () => {
    alert('Không Đồng ý');
  }
  const Chon2 = () => {
    Alert.alert(
      //title
      'Thông Báo',
      //body
      'Bạn có muốn Thoát khỏi chương trình không ?',
      [
        {
          text: 'Đồng Ý',
          onPress: () => DongY()
        },
        {
          text: 'Không Đồng Ý',
          onPress: () => KhongDongY()
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  }
  const Chon3 = () => {
    Alert.alert(
      //title
      'Thông Báo',
      //body
      'Bạn có muốn Thoát khỏi chương trình không ?',
      [
        {
          text: 'Đồng Ý',
          onPress: () => DongY()
        },
        {
          text: 'Không Đồng Ý',
          onPress: () => KhongDongY()
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  }

  return (
    <View style={styles.container}>
      <Button title='Chọn 1' onPress={()=>Chon1()}></Button>
      <Button title='Chọn 2' onPress={()=>Chon2()}></Button>
      <Button title='Chọn 3'></Button>
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // 'center'
    marginTop: 20,
  },
  dong: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cot1: {
    alignItems: "center",
    flexDirection: "column",
    height: 50,
    flex: 1,
  },
  cot2: {
    flexDirection: "column",
    flex: 2,
  },
  dinhdangchuoi: {
    fontSize: 50,
    color: '#0000ff',
  },
  // dinhdangtext: {
  //   width: '80%',
  //   height: 30,
  //   backgroundColor: '#dcdcdc'
  // },
  dinhdangtext1: {
    width: '80%',
    height: 30,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderWidth: 1,
    textAlign: 'right',
    padding: 5,
  },
  dinhdangtext2: {
    width: '80%',
    height: 30,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: '#dcdcdc',
    textAlign: 'right',
    padding: 5,
  },

  nhaplieu: {
    backgroundColor: 'azure',
    width: '80%', height:50, borderStyle: 'solid', bordercolor: 'black'
  }
});

