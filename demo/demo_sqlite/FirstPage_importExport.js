
import * as React from 'react';
import { Button, View, Text,TextInput, SafeAreaView ,StyleSheet,FlatList} from 'react-native';
import { useState } from 'react';
//Sử dụng SQLlite 
import * as SQLite from 'expo-sqlite/legacy';
const db = SQLite.openDatabase("qlbanhoaVB.db");
const FirstPage = () => {
   const [tennd,gantennd]=useState('');
   const [tendn,gantendn]=useState('');
   const [matkhau,ganmatkhau]=useState('');
   const[email,ganemail]=useState('');
   const [listnguoidung,ganlistnguoidung]=useState([]);
  const taobangUser=()=>{
    db.transaction(function (txn) {  
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
              txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(userid INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(200), password VARCHAR(255),fullname varchar(500),email nvarchar(200) )',
              []
            );
            alert('Tạo Bảng Thành Công');
          }
          else
          alert('Bảng đã có');
        })})}
        const ThemNguoiDung=()=>{
          db.transaction(function (tx) {
            tx.executeSql(
              'INSERT INTO table_user (username, password,fullname,email) VALUES (?,?,?,?)',
              [tendn, matkhau,tennd,email],
              (tx, results) => {
              alert('Thêm Thành Công ');
               
              }
            );
          });
        }
        //Dọc Bảng Người Dùng
      const DocBangNguoiDung=()=>{
        db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM table_user',
              [],
              (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                  temp.push(results.rows.item(i));
                ganlistnguoidung(temp);
              }
            );
          });
      }
         //Hiển Thị
         const ItemView = ({item}) => {
          return (
            <View >
              <Text >{item.fullname}</Text>
            </View>
          );
        };
        const ItemSeparatorView = () => {
          return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8'
                }}
            />
          );
        };
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <Text>Tên Người Dùng</Text>
      <TextInput value= {tennd} onChangeText={gantennd}/>
      <Text>Tên Đăng Nhập</Text>
      <TextInput value= {tendn} onChangeText={gantendn}/>
      <Text>Mật Khẩu</Text>
      <TextInput value= {matkhau} onChangeText={ganmatkhau} secureTextEntry={true}/>
      <Text>Email</Text>
      <TextInput value= {email} onChangeText={ganemail}/>
      <Button title='Đăng Ký' onPress={()=>{ThemNguoiDung()}} />
      <Button title='Đọc Bảng' onPress={()=>{DocBangNguoiDung()}} />

      <FlatList
        data={listnguoidung}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
      </SafeAreaView>
  );
}

export default FirstPage;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
    inputStyle: {
      width: '80%',
      height: 44,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#DBDBD6',
    },
  });