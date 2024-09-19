import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function DangKy({ganthongtin}) {
  const [hoten, gan] = useState('')
  const Ganthongtinquacha = () => {
    ganthongtin(hoten)
  }
  return (
    <View>
      <Text>Đăng Ký</Text>
      <Text>Nhập Họ Tên </Text>
      <TextInput value={hoten} onChangeText={gan} />
      <Button title='Đăng Ký' onPress={Ganthongtinquacha} />
    </View>
  )
}