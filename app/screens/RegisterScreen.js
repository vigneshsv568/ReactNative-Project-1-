import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { RegisterForm } from "../components/authForms";

function RegisterScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      </View>
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
  },
});

export default RegisterScreen;
