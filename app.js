import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, FlatList } from 'react-native'; 

import Login from './src/components/Login'
import TaskList from './src/components/TaskList'

let tasks = [
  {key:"1", nome:"comprar cocacola"},
  {key:"2", nome:"comprar coco ralado"}
]

export default function App(){
  const [user, setUser] = useState(null)
  const [newTask, setNewTask] = useState('')

  if(!user){
    return <Login changeStatus={ (user) => setUser(user)}/>
  }

  return(
    <SafeAreaView style={styles.container}>
      


      <View style = {styles.containerInput}>
        <TextInput
        style = {styles.input}
        placeholder='oque vai fazer hoje?'
        value={newTask}
        onTextChange={(text)=>setNewTask(text)}
        />
        <TouchableOpacity style = {styles.buttonAdd}>
        <Text style = {styles.buttao}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item=>item.key}
        renderItem={({item})=>(
          <TaskList data={item}/>
        )}
      />



    </SafeAreaView>
  );
}






const styles = StyleSheet.create({
container:{
  flex:1,
  paddingTop:25,
  paddingHorizontal:10,
  backgroundColor:"#f2f6fc"
},
containerInput:{
  flexDirection:"row"
},
input:{
  flex:1,
  marginBottom:10,
  padding:10,
  backgroundColor:"#fff",
  borderRadius:4,
  borderWidth:1,
  borderColor:"#141414",
  height:45
},
buttonAdd:{
  backgroundColor:"#141414",
  height:45,
  alignItems:"center",
  justifyContent:"center",
  marginLeft:5,
  paddingHorizontal:14,
  borderRadius:4
},
buttao:{
  color:"#fff",
  fontSize:22
}

})