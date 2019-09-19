import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet,View,Text, Image, TouchableOpacity} from 'react-native';

export default class TriangleScreen extends React.Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}> Do You Know What This Symbol Means? </Text>
        <Image source={require("../images/arrows.png")} style={styles.img} />
        <TouchableOpacity onPress={()=>{}} style={styles.btn}>
          <Text style={styles.btn_text}> 
            Continue 
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height: hp("100%"),
    width: wp("100%")
  },
  text:{
    fontSize:18
  },  
  img:{
    marginTop:hp("10%"),
    height:hp("30%"),
    width: wp("55s%")
  },
  btn:{
    marginTop:hp("5%"),
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: hp("6%"),
    width:wp("50%"),
    backgroundColor:'#2791FB',
  },
  btn_text:{
    fontSize:16,
    color:'#fff'
  }
})
