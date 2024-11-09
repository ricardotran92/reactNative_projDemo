import { View, Text,Image,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
export default function Pageproducts({navigation,route}) {
    const[category,setcategory]=useState(route.params.category);
    const[listproducts ,setlistproducts]=useState([])
    const GetproductsBycategories = async () => {
        navigation.setOptions({
            title: category
          });
        try {
          const response = await axios.get(
            'https://fakestoreapi.com/products/category/'+category,
          );
          setlistproducts(response.data);
        } catch (error) {
          // handle error
          alert(error.message);
        }
      };
      
      const ItemView = ({item}) => {
        return (
          // FlatList Item
          <View>
            <Text style={styles.item}> {item.title}</Text>
            <Image
            source={{uri: item.image}} 
            style={{width: 200, height: 200}} />
          </View>
        );
      };
    
      const ItemSeparatorView = () => {
        return (
          // FlatList Item Separator
          <View
              style={{
                  height: 0.5,
                  width: '100%',
                  backgroundColor: '#C8C8C8'
              }}
          />
        );
      };
    
     
      useEffect(() => {
        GetproductsBycategories();
      }, [category]);
      return (
        <View style={styles.container}>
          <FlatList
              data={listproducts}
              //data defined in constructor
              ItemSeparatorComponent={ItemSeparatorView}
              //Item Separator View
              renderItem={ItemView}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop:20
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
  });