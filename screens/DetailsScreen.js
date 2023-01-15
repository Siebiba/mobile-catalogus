import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ReisDetails from '../components/ReisDetails.js';

const DetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;


  return (

    console.log(id),
    <View style={styles.screen}>
      <ReisDetails id={id} />
      
      <Button
        title="Go to catalogus"
        onPress={() => navigation.navigate('Reizen')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  }
});
export default DetailsScreen;