import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Results = ({route}) => {
  const {result, path} = route.params || {};
  console.log(route.params);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result</Text>
      <Text style={styles.result}>{result}</Text>
      <Image source={{uri: path}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white'},
  result: {color: 'white', fontSize: 20, fontWeight: '500'},
  image: {
    height: 200,
    width: 200,
    marginTop: 30,
    borderRadius:20
  },
});

export default Results;
