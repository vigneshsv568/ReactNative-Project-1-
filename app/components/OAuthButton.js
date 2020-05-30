import React from "react";
import { View, StyleSheet } from "react-native";

import { AppButton } from "./primitives";
import defaultStyles from "../config/styles";

function OAuthButton({
  google,
  facebook,
  github,
  linkedin,
  twitter,
  instagram,
}) {
  return (
    <View style={styles.authContainer}>
      {google && (
        <AppButton
          title="Google"
          onPress={() => console.log("Login with google")}
          image={require("../assets/google-signin-light.png")}
          styleButton={[
            defaultStyles.iconButton,
            { backgroundColor: defaultStyles.colors.googleBlue },
          ]}
          styleText={{
            color: "white",
            textTransform: "none",
          }}
        />
      )}
      {facebook && (
        <AppButton
          title="Facebook"
          onPress={() => console.log("Login with facebook")}
          icon={{ name: "facebook-box", color: "white", size: 20 }}
          styleButton={[
            defaultStyles.iconButton,
            { backgroundColor: defaultStyles.colors.fb },
          ]}
          styleText={{
            color: "white",
            textTransform: "none",
          }}
        />
      )}
      {instagram && (
        <AppButton
          title="Instagram"
          onPress={() => console.log("Login with Instagram")}
          icon={{ name: "instagram", color: "white", size: 20 }}
          styleButton={[
            defaultStyles.iconButton,
            { backgroundColor: "#8a3ab9" },
          ]}
          styleText={{
            color: "white",
            textTransform: "none",
          }}
        />
      )}
      {linkedin && (
        <AppButton
          title="LinkedIn"
          onPress={() => console.log("Login with LinkedIn")}
          icon={{ name: "linkedin-box", color: "white", size: 20 }}
          styleButton={[
            defaultStyles.iconButton,
            { backgroundColor: defaultStyles.colors.linkedInBlue },
          ]}
          styleText={{
            color: "white",
            textTransform: "none",
          }}
        />
      )}
      {twitter && (
        <AppButton
          title="Twitter"
          onPress={() => console.log("Login with Twitter")}
          icon={{ name: "twitter-circle", color: "white", size: 20 }}
          styleButton={[
            defaultStyles.iconButton,
            { backgroundColor: defaultStyles.colors.twitterBlue },
          ]}
          styleText={{
            color: "white",
            textTransform: "none",
          }}
        />
      )}
      {github && (
        <AppButton
          title="GitHub"
          onPress={() => console.log("Login with GitHub")}
          icon={{ name: "github-circle", color: "white", size: 20 }}
          styleButton={[
            defaultStyles.iconButton,
            { backgroundColor: defaultStyles.colors.githubBlack },
          ]}
          styleText={{
            color: "white",
            textTransform: "none",
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "center",
  },
});

export default OAuthButton;
