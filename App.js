import * as React from 'react';
import {useEffect, useState, } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';



export default function App() {
  
  const [minutes, setMinutes] = useState(25)
  const [secods, setSeconds] = useState(0)
  

  useEffect(() => {
    let count = 0
    const loop = setInterval(() =>{
      
      if(count === 0){
        setMinutes(minutes => minutes -1 )
        setSeconds(60)
        count = 60 
      }
      if(count > 0 ){    
        setSeconds(secods => secods -1 )
        count = count - 1
        console.log(count)
      }
    }, 1000)
    return () => clearInterval(loop)
  },[])

  return (
    
    <View style={styles.container}>
      <Text>{`${minutes}:${secods}`}</Text>
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
 
});
