import { View, TextInput, Image } from 'react-native'
import React from 'react'
import styles from './styles'

import Search from '../../assets/images/search_icon.png'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image source={Search} style={styles.searchIcon}></Image>
      <TextInput placeholder={"Search your food"}/>
    </View>
  )
}

export default SearchBar