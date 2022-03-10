import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {colors} from '../util/index'
const ReloadApp = ({load}) => {
  return (
    <View style={styles.reload}>
        <MaterialCommunityIcons onPress={load} name="reload" size={24} color={colors.primary} />
    </View>
  )
}

export default ReloadApp

const styles = StyleSheet.create({

    reload:
    {
        position:'absolute',
        right:-105,
        top:150,
    }

})