import  { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image,StyleSheet } from 'react-native'
//import all the components we are going to use.
import axios from 'axios';
export default function Pageproducts({navigation,route}) {
    const[category,setcategory]=useState(route.params.category)
    const [listproducts,getlistproducts]=useState([]);
  const getProductApi = async () => {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products/category/'+category,
      );
      getlistproducts( response.data);
    } catch (error) {
      // handle error
      alert(error.message);
    }
   
  };
  useEffect(() => {
    getProductApi();
  }, [category]);
  const ItemView = ({item}) => {
    return (
      <View >
        <Text style={styles.textf} onPress={()=>{navigation.navigate('Pagedetailproducts', {
              productid: item.id,
            })

        }} >{item.title}</Text>
       <Image source={{uri: item.image} }
        style={{width: 200, height: 200}} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color:"aqua"
  },
  textf:{
      fontSize: 18,
      
      color:"blue"
  }
});
