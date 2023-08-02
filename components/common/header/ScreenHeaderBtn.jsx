import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './screenheader.style'
import { Entypo } from '@expo/vector-icons';

const ScreenHeaderBtn = ({ menu}) => {
  return (
    <TouchableOpacity>
    <Entypo name="menu" size={35} color="black" />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn