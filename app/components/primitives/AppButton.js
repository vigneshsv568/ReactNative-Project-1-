import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

function AppButton({ title, onPress, styleButton, styleText }) {
  return (
    <TouchableOpacity style={[styles.button, styleButton]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
}

// Define a standard style for the buttons here.
// This will be same across the app for consistency
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
