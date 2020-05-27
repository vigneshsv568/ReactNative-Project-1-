import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../primitives/AppText";

function ErrorMessage({ error, visible }) {
  if (error && visible) return <AppText style={styles.error}>{error}</AppText>;
  return null;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
