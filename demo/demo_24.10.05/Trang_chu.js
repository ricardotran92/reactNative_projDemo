
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChitietHoa from '../pages/ChitietHoa'
import Trangloaihoa from '../pages/Trangloaihoa';
import DsHoa from '../pages/DsHoa';
import { useState, useEffect } from "react";
const Stack = createNativeStackNavigator()
//Sử dụng SQLlite 
import * as SQLite from 'expo-sqlite/legacy';
const db = SQLite.openDatabase("Qlbhlt.db");

export default function Trang_chu() {
  //xây dựng các hàm khởi tạo dữ liệu
//Tạo Bảng Loại Hoa
const nhaploaihoa=(tenloai)=>{
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO tblloaihoa (tenloai) VALUES (?)',
      [tenloai],
      (tx, results) => {
       
      }
    );
  });
}
const Khoitaodulieuloaihoa=()=>
{
const DATA = [
{
"maloai":"1",
"tenloai": "Hoa Quà tặng",
"hinh":require('../assets/images/cuc_1.jpg')
},
{
  "maloai":"2",
  "tenloai": 'Hoa Cưới',
  "hinh": require('../assets/images/cuoi_1.jpg')
},
{
  "maloai":"3",
  "tenloai": 'Hoa Hồng',
  "hinh": require('../assets/images/hong_1.jpg')
},
{
  "maloai":"4",
  "tenloai": 'Hoa Xuân',
  "hinh": require('../assets/images/xuan_1.jpg')
}  
];
for(i=0;i<DATA.length;i++)
nhaploaihoa(DATA[i].tenloai);
}
const TaobangLoaiHoa=()=>{
  db.transaction(function (txn) {  
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='tblloaihoa'",
      [],
      function (tx, res) {
        if (res.rows.length == 0) {
            txn.executeSql(
            'CREATE TABLE IF NOT EXISTS tblloaihoa(maloai INTEGER PRIMARY KEY AUTOINCREMENT, tenloai VARCHAR(200))',
            []
          );
        Khoitaodulieuloaihoa();
        alert('Tạo thanh cong');
        }
      })})}
      useEffect(() => {
       TaobangLoaiHoa();
      }, []); 
  return (
    <Stack.Navigator initialRouteName="Trangloaihoa">
        <Stack.Screen
          name="Trangloaihoa"
          component={Trangloaihoa}
          options={{
            title: 'Loại Hoa', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="DsHoa"
          component={DsHoa}
          options={{
            title: 'Danh Sách Hoa', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }} 
        />
        <Stack.Screen
          name="ChitietHoa"
          component={ChitietHoa}
          options={{
            title: 'Chi Tiết Hoa', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>

  )
}