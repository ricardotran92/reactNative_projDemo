import { View, Text,FlatList ,StyleSheet,SafeAreaView,Image} from 'react-native'
import { useState, useEffect } from "react";
//Sử dụng SQLlite 
import * as SQLite from 'expo-sqlite/legacy';
const db = SQLite.openDatabase("Qlbhlt.db");
export default function Trangloaihoa({navigation}) {
  const [DATA,gandsloaihoa]=useState([]);
  const DocBangLoaiHoa=()=>{
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tblloaihoa',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
    
            gandsloaihoa(temp);
        }
      );
    });
  }
  useEffect(() => {
    DocBangLoaiHoa();
   }, []); 

    

         const ItemView = ({item}) => {
            return (
              <View >
                <Text>{item.tenloai}</Text>
                <Text>{item.hinh}</Text>
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
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <FlatList
        data={DATA}
        //data defined in constructor
        ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  </SafeAreaView>
);
};

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
},
});
