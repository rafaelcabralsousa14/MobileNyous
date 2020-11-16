import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const Home = () => {

    // const [token, setToken] = useState('');

    // const getToken = async () => {
    //     setToken(await AsyncStorage.getItem('@jwt'))
    // }

    // useEffect(()=>{
    //     getToken();
    // }, [])      

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        listarEventos();
    }, [])

    const listarEventos = () => {
        fetch('http://192.168.0.6:5000/api/eventos')
        .then(response => response.json())
        .then(dados => {
            setEventos(dados.data);
        })
        .catch(err => console.error(err));
    }

    const renderItem = ({evento}) => {
        return(
            <ItemEvento nome={evento.item.nome} imagem={evento.item.urlImagem} link={evento.item.link} />
        )
    }

    return(
        <View>
            <Text>Home</Text>
            {/* <Text>{token}</Text> */}
            <FlatList
                data={eventos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Home;