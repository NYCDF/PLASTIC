import React from 'react';
import {StyleSheet} from 'react-native';

class TriangleScreen extends React.Component{

  render(){
    return(
      <div className='container' style={styles.container}>
        TRIANGLE 
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    borderColor:'black'
  }
})

export default TriangleScreen;

