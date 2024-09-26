import { View, Text,Image } from 'react-native'
import React from 'react'

export default function ChitietHoa({ navigation,route }) {
  return (
    <View>
      <Text>Tên Hoa {route.params.hoachon.tenhoa}</Text>
      <Text>Tên Hoa {route.params.hoachon.mota}</Text>
      <Image source={route.params.hoachon.hinh}  />
    </View>
  )
}