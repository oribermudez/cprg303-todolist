import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.appName}>To Do List</Text>
      <Text style={styles.copyright}>&copy; 2023 Ori Bermudez</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    color: '#fff',
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
  },
  appName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyright: {
    fontSize: 12,
    color: '#888',
  },
});

export default Footer;
