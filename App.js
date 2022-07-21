import React from 'react';
import { StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CategoriesScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});
