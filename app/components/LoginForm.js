import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import { AppText } from "./primitives";
import { AppForm, AppFormField, SubmitButton } from "./forms";
import OAuthButton from "./OAuthButton";
import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginForm(props) {
  return (
    <>
      <View style={styles.loginForm}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="email"
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            placeholder="Password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </AppForm>
      </View>
      <View>
        <OAuthButton google facebook />
      </View>
      <TouchableOpacity
        style={styles.footerText}
        onPress={() => console.log("Go to signup")}
      >
        <AppText
          style={{
            color: defaultStyles.colors.secondary,
          }}
        >
          Dont have an account? Signup
        </AppText>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  footerText: {
    alignSelf: "center",
    marginTop: 30,
  },
  loginForm: { width: "100%", marginTop: 25 },
});

export default LoginForm;
