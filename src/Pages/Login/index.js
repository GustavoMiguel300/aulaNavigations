import React, { useState, useEffect } from 'react';
import { View, Text ,StyleSheet, TextInput,Button , FlatList, ActivityIndicator, Alert, Keyboard} from 'react-native';

import firebase from '../../firebaseConnection';

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';







export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const navigation = useNavigation('')
    const route = useState('')
    
    async function login(){
      await firebase.auth().signInWithEmailAndPassword(email,password)
      .then((value)=>{
        setUser(value.user.email)
        Keyboard.dismiss()
        navigation.navigate('Home', {user})
        
      })
      .catch((error)=>{
        alert('algo deu errado')
        return;
      })
      setEmail('')
      setPassword('')
    }
  


    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>
                Login
            </Text>
            <Text style = {styles.TextInput}>
                Email
            </Text>
            <TextInput
            style = {styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto)=> setEmail(texto)}
            value={email}
            />
            <Text style = {styles.TextInput}>
                Senha
            </Text>
            <TextInput
            style = {styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(texto)=> setPassword(texto)}
            value={password}
            />

            

            <Button
            title="login"
            //colocar teclado desmiss
            onPress={ login }
            />

            <Text style = {{marginTop:20, fontSize:23, textAlign:"center"}}>
                {user}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    title:{
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold",
        marginBottom:30
    },
    TextInput:{
        fontSize:17,
        marginLeft:10,
        marginBottom:10
    },
    input:{
        marginBottom:10,
        padding:15,
        borderWidth:1,
        borderColor:"#121212",
        height:50,
        fontSize:17,
        color:"#b2536a"
    }
})