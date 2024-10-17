import { View, Text,TextInput,Button,StyleSheet,FlatList } from 'react-native'
import { useState } from 'react';
//Dùng Expo sqlite
import * as SQLite from 'expo-sqlite/legacy';
//Mở DataBase
const db = SQLite.openDatabase("qlbanhoap11.db")
//Dùng UserContext
import UserContext from './UserContext';
import {  useContext  } from "react";
export default function DangNhap() {
    const [tendn,gantendn]=useState('');
    const[matkhau,ganmatkhau]=useState('');
    const[email,ganemail]=useState('');
    const[nguoidung,gannguoidung]=useState({username:""});
    //lấy thông tin từ Context
    const { user,setuser } = useContext(UserContext);
    //Tạo Bảng Người Dùng
    const DocBangNguoiDung=()=>{
        db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM tbluser where username=? and password=? ',
              [tendn,matkhau],
              (tx, results) => {
                if(results.rows.length>0)
                {
               
                  gannguoidung(results.rows.item(0));
                setuser(results.rows.item(0));
              }
              else
              alert('Đăng nhập sai');

              }
            );
            
          });
      }
         const ItemView = ({item}) => {
            return (
              <View >
                <Text >{item.username}</Text>
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
  
     <View>
      <Text>Tên Đăng Nhập</Text>
      <TextInput styles={styles.item} 
      value= {tendn} onChangeText={gantendn}/>
      <Text>Mật Khẩu</Text>
      <TextInput styles={styles.item} 
      secureTextEntry={true}
      value= {matkhau} onChangeText={ganmatkhau}
      />
       <Button title='Đăng Nhập' onPress={()=>{DocBangNguoiDung()}}/>
      <Text>{nguoidung.username}</Text>
      <Text>{user.username}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor:'#fff8dc'
    },
    });
    