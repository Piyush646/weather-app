import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-community/picker';
export default function UnitsPicker({unitSystem,setUnitSystem}) {
  return (
    <View >
      <Picker selectedValue={unitSystem} onValueChange={(item)=>
        {
          setUnitSystem(item)
        }} mode='dropdown'>
        <Picker.Item label='C°' value='metric'/>
        <Picker.Item label='F°' value='imperial'/>
      </Picker>
    </View>
  )
}

// const styles= StyleSheet.create({

//   picker:
//   {
//     position:'absolute',
//     top:80,
//     left:10,
//   }
// })