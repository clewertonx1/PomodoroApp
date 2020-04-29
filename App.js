import * as React from 'react';
import {useEffect, useState, } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {
  
  const [minutes, setMinutes] = useState(25)
  const [secods, setSeconds] = useState(0)
  const [status, setStatus] = useState(false)
  const [intervalStatus, setIntervalStatus] = useState(false)

  
  useEffect(() =>{
    console.log("teste")
    console.log(status)

   

    if(status){

      if(intervalStatus){
        setMinutes(5)
      }else{
        setMinutes(25)      
      }

      let countSeconds = 0
      let countMinutes = minutes
      console.log(countSeconds)
      const loop = setInterval(() =>{
        if(countMinutes < 0 ){
          setIntervalStatus(!intervalStatus)
          setMinutes(5)
          countSeconds = 0
          setSeconds(0)
          clearInterval(loop)    
        }
        if(countSeconds === 0){
          setMinutes(minutes => minutes -1 )
          setSeconds(60)
          countMinutes = countMinutes - 1
          countSeconds = 60
        }
        if(countSeconds > 0 ){    
          setSeconds(secods => secods -1 )
          countSeconds = countSeconds - 1
        }
    }, 1000)
    return () => clearInterval(loop)
    }
  },[status])


  function changeStatus(){
    setStatus(!status)
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>{`${minutes}:${secods}`}</Text>
      <TouchableOpacity  style={[styles.button, {backgroundColor: status ? '#ff7272' : "#83fc93"}]} onPress={() => changeStatus()}>
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
