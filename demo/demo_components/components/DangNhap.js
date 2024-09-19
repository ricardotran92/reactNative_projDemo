import { View, Text } from 'react-native'
import React from 'react'

export default function DangNhap({thongtin}) {
  return (
    <View>
      <Text>Thông Tin Đăng Ký</Text>
      <Text>Chào: {thongtin}</Text>
    </View>
  )
}