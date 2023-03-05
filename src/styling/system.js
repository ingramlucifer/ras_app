import { StyleSheet } from "react-native";
import { APP_COLORS } from "./colors";
import { FONTS } from "./polices";

export const APP_STYLE = StyleSheet.create({
  container_waiting_load_finish: {
    justifyContent: "center",
    // marginTop: 50,
    flex: 1,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
  },
  app_name: {
    fontFamily: FONTS.snigletRegular,
    fontSize: 20
  }
});
