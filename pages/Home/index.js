import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const Home = () => {

    const [token, setToken] = useState('');

    const getToken = async () => {
        setToken(await AsyncStorage.getItem('@jwt'))
    }

    useEffect(()=>{
        getToken();
    }, []) 

    return(
        <View>
            <Text>Home</Text>
            <Text>{token}</Text>
        </View>
    )
}

export default Home;