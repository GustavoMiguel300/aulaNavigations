import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home(){
  const navigation = useNavigation();

  function navegaSobre(){
    navigation.navigate('Sobre', { nome:'eia eia eia', email:"mateus@teste.com" })
  }

  return(
    <View style={styles.container}>
      <Text>Tela HOME</Text>
      <Button title="Ir para sobre" onPress={ navegaSobre } />
      <Button title='Voltar' onPress={navigation.goBack()}/>
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