import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TriangleScreen from './Screens/TriangleScreen';
import VideoScreen from './Screens/VideoScreen';


export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <VideoScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
