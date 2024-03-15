import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Image } from "react-native";
import HomeIcon from "../../assets/images/home_icon.png";
import ClockIcon from "../../assets/images/clock_icon.png";
import ShoppingIcon from "../../assets/images/shopping_icon.png";

import HomeIconBlack from "../../assets/images/home_icon_black.png";
import ClockIconBlack from "../../assets/images/clock_icon_black.png";
import ShoppingIconBlack from "../../assets/images/shopping_icon_black.png";

const TabBar = ({ state, descriptors, navigation }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  if (!isKeyboardVisible) {
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const icons = {
            Home: HomeIcon,
            History: ClockIcon,
            Shopping: ShoppingIcon,
          };

          const icons_black = {
            History: ClockIconBlack,
            Home: HomeIconBlack,
            Shopping: ShoppingIconBlack,
          };

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              style={
                isFocused ? styles.containerHighlight : styles.containerImage
              }
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Image
                source={isFocused ? icons[label] : icons_black[label]}
                style={styles.image}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  } else {
    return <></>;
  }
};

export default TabBar;
