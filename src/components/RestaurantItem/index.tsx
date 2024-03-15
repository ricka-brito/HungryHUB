import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Star from "../../assets/images/Star.svg";

export default function RestaurantItem({ res, desc, time, pic }) {
  return (
    <View style={styles.container} >
      <Image
        source={{
          uri: pic,
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View style={styles.firstLine}>
          <Text style={styles.text}>{res}</Text>
          <View style={styles.ratingBox}>
            <Star width="20px" height="20px" style={styles.star}/>
            <Text>4.3</Text>
          </View>
        </View>
        <View style={styles.firstLine}>
          <Text style={styles.descText}>{desc}</Text>
          <Text style={styles.descText}>{time}</Text>
        </View>
      </View>
    </View>
  );
}
