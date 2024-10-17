import { Button, View, Text,TextInput, SafeAreaView ,StyleSheet} from 'react-native';
import React, { Component } from 'react'

// Sử dụng SQLite
import * as SQLite from 'expo-sqlite/legacy'
const db = SQLite.openDatabase('qlbanhoaVB.db')
const FirstPage = () => {

  const taobangUser = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql(
              'CREATE TABLE IF NOT EXIST table_user(userid INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(200), password VARCHAR(255), fullname varchar(500), email nvarchar(200))',
              []
            );
            alert('Tạo Bảng Thành Công')
          }
          else
          alert('Bảng đã có');
        }
      )
    })
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Trang Đăng Ký</Text>
      <Button title='Tạo Bảng user' onPress={() => {taobangUser()}}/>
    </SafeAreaView>
  )
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