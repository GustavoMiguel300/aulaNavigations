import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'
 
import Feather from 'react-native-vector-icons/Feather';


import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator();


export default function Routes(){
  return(
      <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown:false,
     
        drawerActiveBackgroundColor:"#00DAE4",
        drawerActiveTintColor:"#fff",

        drawerInactiveBackgroundColor:"#F1F1F1",
        drawerInactiveTintColor:"#000"
        
      }}
      >
        <Drawer.Screen
        name='HomeStack'
        component={StackRoutes}
        options={{
          title:"Inicio"
        }}
        />
        <Drawer.Screen
        name='Sobre'
        component={Sobre}
        />
        <Drawer.Screen
        name='Contato'
        component={Contato}
        />
      </Drawer.Navigator>
    
  )
}