import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native'; 

class App extends Component{


  constructor(props){
    super(props);
    this.state={
      larAnimada: new Animated.Value(0)
    }
    Animated.timing(
      
        this.state.larAnimada,
        {
          toValue:100,
          duration:5000
        }
   
    ).start()
  }
  
  render(){
    let porcentagemAnimate = this.state.larAnimada.interpolate({
      inputRange:[0,100],
      outputRange:['0%','100%']
    })

    return(
      <View style={styles.container}>
        <Animated.View style={{backgroundColor:"#4169e1", width:porcentagemAnimate, height: 25}}>

        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start"
  },
  
  
})

export default App;