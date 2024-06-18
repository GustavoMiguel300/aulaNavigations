import React, { useState, useEffect } from 'react';
import { View, Text ,StyleSheet, TextInput,Button , FlatList, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import firebase from '../../firebaseConnection'
import { useRoute } from '@react-navigation/native';

console.disableYellowBox= true


export default function Home(){

    const [user, setUser] = useState('')
    const navigation = useNavigation('')
    const route = useRoute('')

    async function deslogar(){
     await firebase.auth().signOut()
     setUser('')
     navigation.navigate('Login')
    }

    return(
        <View style = {styles.container}>
            <Text>
                Tela Home
            </Text>
            <Button
            title="logout"
            onPress={deslogar}
            />
            <Text >
                {route.params?.user}
            </Text>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})