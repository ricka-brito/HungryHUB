import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar';
import CategoriesBar from '../../components/CategoriesBar';
import styles from './styles';
import RestaurantScroll from '../../components/RestaurantScroll';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar/>
      <CategoriesBar/>
      <RestaurantScroll/>
    </SafeAreaView>
  )
}
export default Home;