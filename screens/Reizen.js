import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

import ReisItem from '../components/Reisitem.js';


const reizen = ({navigation}) =>{

    const [reizen, setReizen] = useState ([]);

    const getReizen = async () => {
        try {
            const response = await fetch ("https://siebedesign.be/wp-json/wp/v2/posts?categories=12", {

            })
            const json = await response.json();
            setReizen(json);
            console.log(reizen);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReizen();
    }, []);

    //laad search results wanneer je in textinput typt
  const getByTitleSearch = async (enteredText) => {//argument meegegeven door onChangeText
    try {
      if (enteredText.length > 3) {
        const url = encodeURI("https://siebedesign.be/wp-json/wp/v2/posts?slug=" + enteredText + "/");
        console.log(url);
        const response = await fetch(url, {
          
        })
        const json = await response.json();
        console.log(json);
        setReizen(json);
      }
    } catch (error) {
      console.error(error);
    }
  }


    return (
        <View style={styles.screen}>
          <TextInput
        placeholder="search reis"
        style={styles.input}
        onChangeText={getByTitleSearch}//geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
      />
       <FlatList
        data={reizen}
        keyExtractor={(item) => item.id.toString()}
        //text item id



   
     
         renderItem={({item}) => (
      <ReisItem
        title={item.title.rendered}
        image={item.jetpack_featured_media_url}
        onPress={() => navigation.navigate('Details', {id: item.id})}
        
   


 

      />
      )}/>


          

       
     
    </View >


  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
export default reizen;