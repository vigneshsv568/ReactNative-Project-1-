import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  buttons: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    backgroundColor: colors.primary,
  },
  iconButton: {
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 10,
    width: "40%",
    flexDirection: "row",
    margin: 5,
  },
  appTextInputContainer: {
    backgroundColor: colors.light,
    borderRadius: 5,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
};
