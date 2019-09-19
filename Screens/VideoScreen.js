import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Video } from 'expo-av';

class VideoScreen extends React.Component{

  render(){
    return(
      <View style={styles.container}>
     
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
})

export default VideoScreen;
