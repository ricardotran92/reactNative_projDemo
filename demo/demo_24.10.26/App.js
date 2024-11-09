
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';
import { Buffer } from "buffer"
const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
const [token,settoken]=useState('');
const decodeToken=()=>{
  const parts = token.split('.').map(part => Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());

  const payload = JSON.parse(parts[1]);
  alert(JSON.stringify(payload));
  alert(payload.sub);
  console.log('JWT payload', payload);
}
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill UserName');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
   
    let userlogin = {username: userName, password: userPassword};
    
    axios
    .post('https://fakestoreapi.com/auth/login', userlogin)
    .then(function (response) {
      // handle success
      settoken(JSON.stringify(response.data.token));
      alert(JSON.stringify(response.data.token));
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    });
  };

  return (
    <View style={styles.mainBody}>
     
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
    
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
               value={userName}
               onChangeText={setUserName}
                placeholder="Enter UserName" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                value={userPassword}
                onChangeText={setUserPassword}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
              
                secureTextEntry={true}
                
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            
            ) : null}
            <Text>{token}</Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={decodeToken}>
              <Text style={styles.buttonTextStyle}>decodeToken</Text>
            </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});