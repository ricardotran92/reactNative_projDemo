
import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [hk1,ganhk1]=useState(0);
  const [hk2,ganhk2]=useState(0);
  const [tb,gantb]=useState(0);
  const [xl,ganxl]=useState('');
  const TinhDiemtb=()=>{
      var diemtb=0;
      diemtb=(hk1*1+hk2*2)/3;
      gantb(diemtb.toFixed (2));
      var xeploai="";
      if(diemtb>=8)
         xeploai="Giỏi";
      else if(diemtb>=6.5)
        xeploai="Khá";
      else if(diemtb>=5)
        xeploai="Trung Bình";
      else
      xeploai="Yếu";
    ganxl(xeploai);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.dinhdangchuoi}>Kết Quả Học Tập</Text>
      <View style={styles.dong}>
          <View style={styles.cot1}>
            <Text>Điểm HK1</Text>
          </View>
        <View style={styles.cot2}>
          <TextInput style={styles.dinhdangtext1} 
          keyboardType='numeric'
          value={hk1}
          onChangeText={ganhk1}
          ></TextInput>
        </View>
      </View>
      <View style={styles.dong}>
         <View style={styles.cot1}>
             <Text>Điểm HK2</Text>
            </View>
         <View style={styles.cot2}>
          <TextInput style={styles.dinhdangtext1} 
          keyboardType='numeric'
          value={hk2}
          onChangeText={ganhk2}
          ></TextInput>
        </View> 
      </View>
      <View style={styles.dong}>
         <View style={styles.cot1}>
      <Text>Điểm TB</Text>
      </View>
      <View style={styles.cot2}>
      <TextInput style={styles.dinhdangtext2} readOnly='true' value={tb.toString()}></TextInput>
      </View>
      </View>
      <View style={styles.dong}>
         <View style={styles.cot1}>
      <Text>Kết Quả</Text></View>
      <View style={styles.cot2}>
      <TextInput style={styles.dinhdangtext2}  readOnly='true' value={xl}></TextInput>
      </View>
      </View>
      <Button title='Tính Điểm TB' onPress={()=>TinhDiemtb()}></Button>
      <Image source={require('./assets/images/cuc_1.jpg')}
    style={{width: 200, height: 200}} />
    <Image 
    source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'}} 
    style={{width: 100, height: 100}} 
/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
    dong :
    {
      marginTop:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
    },
  cot1:{
    alignItems:"center",
    flexDirection:"column",
    height:50,
    flex:1
  },
  cot2:{
        flexDirection:"column",
        flex:2
      },
  dinhdangchuoi:{
    fontSize:50,
    color:'#0000ff'
  },
  dinhdangtext1:{
    width:"80%",
    height:40,
    borderStyle:"solid",
    borderColor:"#000000",
    borderWidth:1,
    textAlign:"right",
    padding:5
  },
  dinhdangtext2:{
    width:"80%",
    height:40,
    borderStyle:"solid",
    borderColor:"#000000",
    borderWidth:1,
    backgroundColor:"#dcdcdc",
     textAlign:"right",
     padding :5,
     color:"red"
  }
});
