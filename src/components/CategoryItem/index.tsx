import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import COLORS from '../../constants'

export default function CategoryItem({active, icon, text, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: active ? COLORS.royalBlue : "#FAFAFA"}]} onPress={onPress}>
        <Text style={[styles.icon, {backgroundColor: active ? "#fff": "transparent"}]}>{icon}</Text>
        <Text style={[styles.text, {color: active ? "#fff": "#000"}]}>{text}</Text>
    </TouchableOpacity>
  )
}
