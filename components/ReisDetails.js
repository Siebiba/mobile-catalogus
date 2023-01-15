
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';



const ReisDetails = props => {
  const [reisDetails, setReisDetails] = useState({});

  const getDetailsById = async () => {
    try {
      const url = encodeURI("https://siebedesign.be/wp-json/wp/v2/posts/" + props.id + "/")
      console.log(url)
      const response = await fetch(url, {

      })
      const json = await response.json();
      setReisDetails(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDetailsById();
  }, []);

  return (
    <ScrollView>
      
      <Text style={styles.title}>{reisDetails.title}</Text>
      <View style={styles.details}>
        <Text>{reisDetails.plot}</Text>
       
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  details: {
    borderWidth: 1,
    padding: 16,
    margin: 8,
  },
  filmPoster: {
    width: '100%',
    height: 450
  },
  release: {
    fontStyle: 'italic',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'right',
  }
});
export default ReisDetails;