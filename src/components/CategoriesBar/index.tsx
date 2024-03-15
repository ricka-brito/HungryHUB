import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";
import CategoryItem from "../CategoryItem";

export default function CategoriesBar() {

  const [activeCategory, setActiveCategory] = useState({burguer: false, pizza: false, sushi: false, salad: false});

  const handlePress = (type) => {
    setActiveCategory({burguer: false, pizza: false, sushi: false, salad: false, [type]: true});
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories</Text>
      <ScrollView
        horizontal={true}
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}
      >
        <CategoryItem active={activeCategory.burguer} icon={"🍔"} text={"Burguer"} onPress={() => handlePress("burguer")}/>
        <CategoryItem active={activeCategory.sushi} icon={"🍣"} text={"Sushi"} onPress={() => handlePress("sushi")}/>
        <CategoryItem active={activeCategory.pizza} icon={"🍕"} text={"Pizza"} onPress={() => handlePress("pizza")}/>
        <CategoryItem active={activeCategory.salad} icon={"🥗"} text={"Salad"} onPress={() => handlePress("salad")}/>
      </ScrollView>
    </View>
  );
}
