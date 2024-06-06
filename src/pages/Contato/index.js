import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Contato(){


   

    
    return(
        <View style={ styles.container}>
            <Text >Pagina contato</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })