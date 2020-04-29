import * as React from 'react';
import {useEffect, useState, } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {
  
  const [minutes, setMinutes] = useState(25)
  const [secods, setSeconds] = useState(0)
  const [status, setStatus] = useState(false)


  
  useEffect(() =>{
    console.log("teste")
    console.log(status)
    if(status){
      let count = secods
      const loop = setInterval(() =>{
        console.log("teste") 
        console.log(count)
        if(count === 0){
          console.log("bbbb")
          setMinutes(minutes => minutes -1 )
          setSeconds(60)
          count = 60 
        }
        if(count > 0 ){    
          setSeconds(secods => secods -1 )
          count = count - 1
        }
    }, 1000)
    return () => clearInterval(loop)
    }
  },[status])


  function handleButton(){
    setStatus(!status)
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>{`${minutes}:${secods}`}</Text>
      <TouchableOpacity  style={[styles.button, {backgroundColor: status ? '#ff7272' : "#83fc93"}]} onPress={() => handleButton()}>
        <Text style={styles.buttonText}>{status ? "Pause" : "Start"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text:{
    fontSize: 50,
  },
  button:{
    margin: 10,
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
  }
 
});
