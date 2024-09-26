// Lab01-02
import { ImageBackground, StyleSheet, Text, View, SectionList, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { fruits_vegetables, workouts } from './components/data.js';



const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    if (selectedItems.includes(item)) {
      // use 'filter' to remove selected item from array
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      // add item (except selected item) to array by spead operator '...'
      setSelectedItems([...selectedItems, item]);
    }
  }

  const renderWorkoutItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.type);
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.type}</Text>
        <TouchableOpacity
          style={[styles.button, isSelected ? styles.selectButton : styles.deselectButton]}
          onPress={() => handleSelect(item.type)}
        >
          <Text style={styles.buttonText}>{isSelected ? 'DESELECT' : 'SELECT'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderFruitVegetableItem = ({ item }) => {
    const isSelected = selectedItems.includes(item);
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
        <TouchableOpacity
          style={[styles.button, isSelected ? styles.selectButton : styles.deselectButton]}
          onPress={() => handleSelect(item)}
        >
          <Text style={styles.buttonText}>{isSelected ? 'DESELECT' : 'SELECT'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* FlatList Section with Background Image */}
      <View style={styles.listContainer}>
        <Text style={styles.header}>FlatList - Workouts</Text>
        <ImageBackground
          source={{
            uri: 'https://w0.peakpx.com/wallpaper/772/564/HD-wallpaper-never-give-up-body-bodybuilding-bodybuilding-fitness-gethealthy-gym-healthylife-motivation-workout-thumbnail.jpg',
          }}
          style={styles.backgroundImage}
        >
          <FlatList
            data={workouts}
            renderItem={renderWorkoutItem}
            style={styles.flatList}
          />
        </ImageBackground>
      </View>

      {/* SectionList Section with Background Image */}
      <View style={styles.listContainer}>
        <Text style={styles.header}>SectionList - Fruits & Vegetables</Text>
        <ImageBackground
          source={{
            uri: 'https://wallpaper.forfun.com/fetch/2e/2e0c15f35b4002cda13627bbc341fac4.jpeg',
          }}
          style={styles.backgroundImage}
        >
          <SectionList
            sections={fruits_vegetables.map((section) => ({
              title: section.title,
              data: section.data,
            }))}
            keyExtractor={(item, index) => item + index}
            renderItem={renderFruitVegetableItem}
            renderSectionHeader={({ section: { title }}) => (
              <Text style={styles.sectionHeader}>{title}</Text> // header
            )}
            style={styles.sectionList}
          />
            
        </ImageBackground>
      </View>

      {/* Selected Items Display */}
      <View style={styles.selectedItemsContainer}>
        <Text style={styles.selectedItemsHeader}>SELECTED EXERCISES:</Text>
        <Text style={styles.selectedItemsText}>{selectedItems.join(', ')}</Text>
      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
  },

  listContainer: {
    flex: 1,
    margin: 5
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
    color: '#0018A8',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    padding: 3,
    paddingBottom: 13,
    borderRaidus: 0,
    overflow: 'hidden',
    // width: 400,
    // height: 400
  },

  flatList: {
    maxHeight: 250,
  },

  sectionList: {
    maxHeight: 250,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  itemText: {
    fontSize: 16,
  },

  button: {
    padding: 5,
    borderRadius: 3,
  },

  selectButton: {
    backgroundColor: '#007bff',
  },

  deselectButton: {
    backgroundColor: '#007bff',
  },

  selectedItemsContainer: {
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
    height: 150,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    color: '#fff',
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 50,
  },

  selectedItemsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'red',
    // textAlign: 'center'
  },

  selectedItemsText: {
    fontSize: 16,
    // textAlign: 'center'
  }



  
})