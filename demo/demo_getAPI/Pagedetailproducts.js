import  { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image,StyleSheet } from 'react-native'
//import all the components we are going to use.
import axios from 'axios';

export default function Pagedetailproducts({navigation,route}) {
    const[productid,setproductid]=useState(route.params.productid)
    const [products,getproducts]=useState({});
  const getProductDetailApi = async () => {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products/'+productid,
      );
      getproducts( response.data);
    } catch (error) {
      // handle error
      alert(error.message);
    }
   
  };
  useEffect(() => {
    getProductDetailApi();
  }, [productid]);
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.textf} >{products.title}</Text>
       <Image source={{uri: products.image} }
        style={{width: 200, height: 200}} />
     <Text style={styles.textf}>{products.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
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
