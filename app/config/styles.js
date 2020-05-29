import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
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
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    backgroundColor: colors.primary,
  },
  iconButton: {
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "40%",
    flexDirection: "row",
    margin: 15,
  },
};
