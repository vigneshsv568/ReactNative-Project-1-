import React from "react";
import { Switch, View, StyleSheet } from "react-native";
import AppText from "./AppText";

function AppSwitch({
  label,
  value,
  onValueChange,
  trackColor = null,
  thumbColor = null,
  textStyle,
  containerStyle,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <AppText style={[styles.text, textStyle]}>{label}</AppText>}
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={trackColor}
        thumbColor={thumbColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  text: {
    marginRight: 10,
  },
});

export default AppSwitch;
