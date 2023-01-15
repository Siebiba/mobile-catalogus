import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';


const reizen = ({naviation}) =>{

    const [reizen, setReizen] = useState ([]);

    const getReizen = async () => {
        try {
            const response = await fetch ("https://siebedesign.be/wp-json/wp/v2/posts", {

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


    return (
        <View>
            <FlatList data={reizen} renderItem={({item}) => (
            <Text>
                <Text>{item.title.rendered}</Text>
            </Text>
    )}/>
        </View>
    )
}

export default reizen;