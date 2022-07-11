import React from 'react'
import {View, StyleSheet } from 'react-native'

export function Logo() {
    return(
        <>
        <Circle/>
        <Circle2/>
        </>
    )
}



const Circle = () => {

  return <View style={styles.circle} />;
 };     

const Circle2 = () => {

  return <View style={styles.circle2} />;
 };     
          

const styles = StyleSheet.create({

circle: {
  width: 120,
  height: 120,
  borderRadius: 120 / 2,
  backgroundColor: "#50C2C9",
  top: -40,
  left: -10,
  opacity: 0.5,
 
  },
circle2: {
  width: 120,
  height: 120,
  borderRadius: 120 / 2,
  backgroundColor: "#6AE0D9",
  top: -110,
  left: -50,
  opacity: 0.5
 
  },
  

});