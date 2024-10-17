
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
const TaoBangHoa=()=>{
  {
    db.transaction(function (txn) {  
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='tblhoa'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
              txn.executeSql(
              'CREATE TABLE IF NOT EXISTS tblhoa(mahoa INTEGER PRIMARY KEY AUTOINCREMENT,tenloai varchar(200) ,tenhoa varchar(200),dongia int,hinh varchar(200),mota varchar(1000))', [] );
          Khoitaodulieuhoa();
          alert('Tạo bang hoa thanh cong')
          }
        })})}
}
const nhaphoa=(hoa)=>{
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO tblhoa (tenloai,tenhoa,dongia,hinh,mota) VALUES (?,?,?,?,?)',
      [hoa.tenloai,hoa.tenhoa,hoa.dongia,hoa.hinh,hoa.mota],
      (tx, results) => { 
      }
    );
  });
}
const Khoitaodulieuhoa=()=>
{
  const hoas =[{
    "mahoa": 1,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Đón xuân",
    "dongia": 15000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728114593/cuc_1_ib7ri1.jpg',
    "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
  }, {
    "mahoa": 2,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Hồn nhiên",
    "dongia": 60000,
    "hinh":'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_11_v9vtyu.jpg',
    "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
  }, {
    "mahoa": 3,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Tím thuỷ chung",
    "dongia": 45000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_12_c0bpsn.jpg',
    "mota": "Hoa cúc tím"
  }, {
    "mahoa": 4,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Nét duyên tím hoa cà",
    "dongia": 40000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa cúc màu tím nhạt"
  }, {
    "mahoa": 5,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Cùng khoe sắc",
    "dongia": 70000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa cúc các màu: trắng, vàng, cam"
  }, {
    "mahoa": 6,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Trắng thơ ngây",
    "dongia": 65000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa cúc trắng"
  }, {
    "mahoa": 7,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Dây tơ hồng",
    "dongia": 250000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
  }, {
    "mahoa": 8,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Cầu thuỷ tinh",
    "dongia": 220000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa hồng và hoa thuỷ tiên trắng"
  }, {
    "mahoa": 9,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Duyên thầm",
    "dongia": 260000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa cúc trắng, baby, lá măng"
  }, {
    "mahoa": 10,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Ðâm chồi nảy lộc",
    "dongia": 180000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa hồng trắng và các loại lá măng"
  }, {
    "mahoa": 11,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Hoà quyện",
    "dongia": 270000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa hồng trắng, lá thuỷ tùng"
  }, {
    "mahoa": 12,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Nồng nàn",
    "dongia": 210000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111149/cuc_10_g2pac9.jpg',
    "mota": "Hoa hồng đỏ, lá thuỷ tùng, lá măng"
  }, {
    "mahoa": 13,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Together",
    "dongia": 120000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111148/cuc_1_jdvubv.jpg',
    "mota": "Hồng xác pháo, cúc tím"
  }, {
    "mahoa": 14,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Long trip",
    "dongia": 85000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
  }, {
    "mahoa": 15,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Beautiful life",
    "dongia": 100000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa hồng đỏ, lá măng, lá đệm"
  }, {
    "mahoa": 16,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Morning Sun",
    "dongia": 75000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa hồng vàng"
  }, {
    "mahoa": 17,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Pretty Bloom",
    "dongia": 65000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa hồng trắng và lá thông"
  }, {
    "mahoa": 18,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Red Rose",
    "dongia": 45000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa hồng đỏ và lá măng"
  }, {
    "mahoa": 19,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Vấn vuơng",
    "dongia": 150000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá"
  }, {
    "mahoa": 20,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Nắng nhẹ nhàng",
    "dongia": 50000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa cúc xanh, hoa lys vàng, lá đệm"
  }, {
    "mahoa": 21,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Thanh tao",
    "dongia": 120000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm"
  }, {
    "mahoa": 22,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Tinh khiết",
    "dongia": 110000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hồng trắng và salem"
  }, {
    "mahoa": 23,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Mùa xuân chín",
    "dongia": 150000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hồmg cam, cúc xanh, thuỷ tiên và các loại lá"
  }, {
    "mahoa": 24,
    "tenloai": "Hoa Cưới",
    "tenhoa": "Rực rở nắng vàng",
    "dongia": 75000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hồng vàng và cúc vàng"
  }, {
    "mahoa": 25,
    "tenloai": "Hoa Tình Yêu",
    "tenhoa": "Love Candy",
    "dongia": 95000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng"
  }, {
    "mahoa": 26,
    "tenloai": "Hoa Hồng",
    "tenhoa": "Happy Wedding",
    "dongia": 210000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Hoa hồng môn và các loại lá"
  }, {
    "mahoa": 27,
    "tenloai": "Hoa Quà tặng",
    "tenhoa": "Cúc nhiệt đới",
    "dongia": 150000,
    "hinh": 'https://res.cloudinary.com/dwpkfkpey/image/upload/v1728111295/hong_13_zggs5k.jpg',
    "mota": "Cúc vàng - h?ng cam - lá mang"
  }];
for(i=0;i<hoas.length;i++)
    nhaphoa(hoa[i]);
}

      useEffect(() => {
       TaobangLoaiHoa(),TaoBangHoa()
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