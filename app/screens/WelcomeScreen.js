import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";

import { AppText, AppButton } from "../components/primitives";
import defaultStyles from "../config/styles";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppText style={styles.text}>A Designer's Paradise</AppText>
      </View>
      <View style={styles.butonContainer}>
        <AppButton
          title={"Login"}
          styleButton={{ backgroundColor: defaultStyles.colors.primary }}
          styleText={{ textTransform: "none" }}
          onPress={() => console.log("Go to Login screen")}
        />
        <AppButton
          title={"Register"}
          styleButton={{ backgroundColor: defaultStyles.colors.secondary }}
          styleText={{ textTransform: "none" }}
          onPress={() => console.log("Go to Register screen")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 15,
  },
  butonContainer: {
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
});

export default WelcomeScreen;
