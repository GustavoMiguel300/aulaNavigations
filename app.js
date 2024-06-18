import React, { useState, useEffect } from 'react';
import { View, Text ,StyleSheet, TextInput,Button , FlatList, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import firebase from './src/firebaseConnection';
import Login from './src/Pages/Login'
import Home from './src/Pages/Home'


console.disableYellowBox=true;

const Stack = createNativeStackNavigator();


export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Login}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )




}