import React, { useState, useEffect } from 'react';
import { View, Text ,StyleSheet, TextInput,Button , FlatList, ActivityIndicator} from 'react-native';
import firebase from './src/firebaseConnection';


console.disableYellowBox=true;

export default function App(){
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')
  


  
  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((value)=>{
      alert('usuario criado: ' + value.user.email)
    })
    .catch( (error) => {
      if(error.code === 'auth/weak-password'){
        alert('sua senha deve conter pelomenos 6 caracteres')
        return;
      }
      if(error.code === 'auth/invalid-email' ){
        alert('email invalido')
        return;
      }else{
        alert('erro ao cadastrar')
        return;
      }
    })
    setEmail('')
    setPassword('')
  }

  return(
    <View style={ styles.container}>
      <Text style={ styles.texto}>Email</Text>
      <TextInput
      style={ styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto)=>setEmail(texto)}
      value={email}
      />

      <Text style={ styles.texto}>Senha</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText={(texto)=>setPassword(texto)}
      value={password}
      />

      <Button
      title='cadastrar'
      onPress={cadastrar}
      />
      

    </View>

  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:10,
  },
  texto:{
    fontSize:20
  },
  input:{
    marginBottom:10,
    padding:10,
    borderWidth:1,
    borderColor:"#121212",
    height:45,
    fontSize:17
  }
})