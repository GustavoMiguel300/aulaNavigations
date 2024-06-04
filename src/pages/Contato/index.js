import { StackActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Contato(){


    const navigation = useNavigation()

    function handleHome(){
       navigation.dispatch(StackActions.popToTop())
    }
    return(
        <View style={ styles.container}>
            <Text >Pagina contato</Text>
            <Button title="voltar Home" onPress={handleHome}/>
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