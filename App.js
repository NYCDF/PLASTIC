import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TriangleScreen from './TriangleScreen';
import VideoScreen from './VideoScreen';


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
