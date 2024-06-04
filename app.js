// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; 
// import FontAwesome from 'react-native-vector-icons/FontAwesome' 
// import Feather from 'react-native-vector-icons/Feather'

// class App extends Component{


//   constructor(props){
//     super(props);
//     this.state={

//     }
//   }

//   render(){

//     return(
//       <View style={styles.container}>
//         <Text>Sujeito progamador</Text>
//         <FontAwesome
//         name="home"
//         size={25}
//         color="#11118c"
//         />
//         <FontAwesome
//         name="user"
//         size={25}
//         color="#54a300"
//         />
//         <Feather
//           name="gift"
//           size={25}
//           color="#111"
//         />

//         <TouchableOpacity style={styles.btnYoutube}>
//           <FontAwesome
//             name="youtube"
//             size={25}
//             color="#fff"
//           />
//           <Text style={styles.btnText}>Acessar Canal</Text>
//         </TouchableOpacity>

//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   btnYoutube:{
//     flexDirection:"row",
//     alignItems:"center",
//     justifyContent:"center",
//     padding:5,
//     backgroundColor:"#ff0000",
//     borderRadius:5
//   },
//   btnText:{
//     paddingLeft:10,
//     color:"#FFF"
//   }
  
// })

// export default App;

//aula icons


import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={
          {
            title:'Tela Inicio',
            headerStyle:{
              backgroundColor:"#121212"
            },
            headerTintColor:"#fff",
            headerShown:true
          }
        }
        />

        <Stack.Screen 
        name="Sobre" 
        component={Sobre}
        options={
          {
            title:'Tela Inicio',
            
          }
        } 
        />
        <Stack.Screen 
        name="Contato" 
        component={Contato}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}