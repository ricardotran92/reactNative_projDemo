// Example to make Section List in React Native
// https://aboutreact.com/react-native-sectionlist/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  SectionList,
  Text
} from 'react-native';
import axios from 'axios';
import { useState,useEffect } from 'react';
const App = () => {
  const [listcategories,setlistcategories]=useState([]);
  const [listproducts,setlistproduct]=useState([]);
  const [listselection,setlistselection]=useState([]);
  const getproductsBycategory = async () => {
    var temp = [];
      
       
    try {
      for( let i=0;i<listcategories.length;i++)
      {
      const response = await axios.get(
        'https://fakestoreapi.com/products/category/'+listcategories[i],
      );
      temp.push({title: listcategories[i], data: response.data});
    }
    alert(JSON.stringify(temp));
    setlistselection(temp);
    } catch (error) {
      // handle error
      alert(error.message);
    }
  
  };
};
  const getGetallcategoriesAsyncAwait = async () => {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products/categories',
      );
      setlistcategories(response.data);
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
    
  useEffect(() => {
    getGetallcategoriesAsyncAwait();
  }, []);
  const FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={styles.listItemSeparatorStyle} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SectionList
          ItemSeparatorComponent={FlatListItemSeparator}
          sections={listselection}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderStyle}>
              {section.title}
            </Text>
          )}
          renderItem={({item}) => (
            // Item for the FlatListItems
            <Text
              style={styles.sectionListItemStyle}
              //Item Separator View
              onPress={() => alert(item.title)}>
              {item.title}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  sectionHeaderStyle: {
    backgroundColor: '#CDDC89',
    fontSize: 20,
    padding: 5,
    color: '#fff',
  },
  sectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
  listItemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
});