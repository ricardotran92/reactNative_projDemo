import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  const Chon1=()=>{
    alert('Chào');
  }
  const DongY=()=>{
    alert("Đồng ý");
  }
  const KhongDongY=()=>{
    alert("Không Đồng ý");
  }
  
  const Chon2=()=>{
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
          text: 'Không',
          onPress: () => KhongDongY()
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  }
  const Chon3=()=>{
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
          text: 'Không',
          onPress: () => KhongDongY()
        }
        ,
        {
          text: 'Không Biết',
          onPress: () => alert('Không Biết')
        }
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  }
  return (
    <View style={styles.container}>
      <Button title='Chọn 1' onPress={()=>Chon1()}></Button>
      <Button title='Chọn 2' onPress={()=>Chon2()}></Button>
      <Button title='Chọn 3' onPress={()=>Chon3()}></Button>
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
});
