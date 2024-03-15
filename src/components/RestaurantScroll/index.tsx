import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";
import RestaurantItem from "../RestaurantItem";

export default function RestaurantScroll() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Popular</Text>
      <ScrollView
        style={styles.list}
        scrollEnabled={true}
        contentContainerStyle={{ paddingHorizontal: 20, marginTop: 10, paddingBottom: 30}}
      >
        <RestaurantItem
          res={"Max's burger"}
          desc={"Burgers • Fast Food"}
          time={"10min"}
          pic="https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_XL.jpg"
        />
        <RestaurantItem
          res={"Burger Life"}
          desc={"Burgers • Health"}
          time={"10min"}
          pic="https://revistamenu.com.br/wp-content/uploads/sites/24/2021/12/burgerveganorecorde-1.jpg"
        />
        <RestaurantItem
          res={"McDonald's"}
          desc={"Burgers • Fast Food"}
          time={"10min"}
          pic="https://super.abril.com.br/wp-content/uploads/2017/03/bigmac.png?w=720&h=440&crop=1"
        />
        <RestaurantItem
          res={"Burger King"}
          desc={"Burgers • Fast Food"}
          time={"10min"}
          pic="https://classic.exame.com/wp-content/uploads/2021/06/Burger-King-Whopper.jpg?quality=70&strip=info&w=1200"
        />
        <RestaurantItem
          res={"Madero"}
          desc={"Burgers • Barbecue"}
          time={"10min"}
          pic="https://master.restaurantemadero.com.br/assets/site/images/image004.png"
        />
      </ScrollView>
    </View>
  );
}
