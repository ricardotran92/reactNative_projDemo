
import  {useState} from 'react';

//import all the components we are going to use
import {
  Modal,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Alert
} from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>  
          <View style={styles.modal}>
            <Text style={styles.text}>Tên Hoa : Hoa Quà tặng</Text>
          <Text  style={styles.text}>Đơn Giá: 150,000 vnd</Text>
            <Image  source={require('./assets/images/cuc_9.jpg')}  
         style={{width: 200, height: 200}}></Image>
           <Text style={styles.text}>
         "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
         </Text>
            <Button
              title="Close"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>
        
        <Button
          title="Hoa Hồng"
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});

export default App;