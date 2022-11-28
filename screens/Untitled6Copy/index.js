import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled6Copy = () => {
  return <View style={styles.container}>
      <View style={styles.column1} />
      <View style={styles.column2} />
      <View style={styles.column3} />
      </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    padding: 10,
    backgroundColor: '#f0f0f1'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 0
  },
  sCtMRxkn: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled6Copy;