import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";

function AppButton({ title, onPress, styleButton, styleText, icon, image }) {
  return (
    <TouchableOpacity
      style={[defaultStyles.buttons, styles.button, styleButton]}
      onPress={onPress}
    >
      {icon && (
        <MaterialCommunityIcons
          style={{ marginRight: 5 }}
          name={icon.name}
          color={icon.color}
          size={icon.size}
        />
      )}
      {image && (
        <Image
          source={image}
          style={{ width: 25, height: 20, marginRight: 5 }}
        />
      )}
      <Text style={[defaultStyles.text, styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
}

// Define a standard style for the buttons here.
// This will be same across the app for consistency
const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 25,
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "500",
  },
});

export default AppButton;
