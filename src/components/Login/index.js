import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'; 

import firebase from '../../firebaseConnection'



export default function login( { changeStatus } ){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type , setType]= useState('login')


 function handleLogin(){
    if(type === 'login'){
      //fazer login  
      const user = firebase.auth().signInWithEmailAndPassword(email,password)
      .then((user)=>{
        changeStatus(user.user.uid)
      })
      .catch((err)=>{
        console.log(err);
        alert('algo deu errado')
        return;
      })
      setEmail('')
      setPassword('')
    }else{
      //cadastro
      const user = firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((user)=>{
        changeStatus(user.user.uid)
      })
      .catch((err)=>{
        console.log(err);
        alert('algo deu errado')
        return;
      })
      setEmail('')
      setPassword('')
    }
 }


  return(
    <SafeAreaView style={styles.container}>
      

    <TextInput
    placeholder='Seu email'
    style = {styles.input}
    value={email}
    onChangeText={(text)=> setEmail(text)}
    />
    <TextInput
    placeholder='*******'
    style = {styles.input}
    value={password}
    onChangeText={(text)=> setPassword(text)}
    />

    <TouchableOpacity 
    style = {[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'}]}
    onPress={handleLogin}
    >
        <Text style = {styles.loginText}>
            {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> setType(type => type === 'login' ? 'cadastrar' : 'login' )}>
        <Text style = {{textAlign:"center"}}>
            {type === 'login' ? 'Criar uma conta' : "Ja possuo uma conta"}
        </Text>
    </TouchableOpacity>

    </SafeAreaView>
  );
}






const styles = StyleSheet.create({
container:{
    flex:1,
    paddingTop:40,
    backgroundColor:"#f2f6fc",
    paddingHorizontal:10
},
input:{
    marginBottom:10,
    backgroundColor:"#fff",
    borderRadius:4,
    height:45,
    padding:10,
    borderWidth:1,
    borderColor:"#141414"
},
handleLogin:{
    alignItems:"center",
    justifyContent:"center",
    height:45,
    marginBottom:10,
},
loginText:{
    color:"#fff",
    fontSizeL:17
}

})