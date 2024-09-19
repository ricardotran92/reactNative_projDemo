import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DangKy from './components/DangKy'
import DangNhap from './components/DangNhap'

export default function App() {
  const [hoten, ganhoten] = useState('')
  const NhapThongTin = (tt) => {
    ganhoten(tt)
  }
  return (
    <View>
      <Text>Nhập Họ Tên</Text>
      <TextInput
        value={hoten}
        onChangeText={ganhoten}
        style={styles.nhaplieu}
      />
      <Text>Ví Dụ Components</Text>
      <DangKy ganthongtin={NhapThongTin}/>
      <DangNhap thongtin={hoten}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nhaplieu :{
    backgroundColor:"yellow"
  }
});
