import { StyleSheet } from "react-native";
import { APP_COLORS } from "./colors";
import { FONTS } from "./polices";

export const DASHBOARD_HEADER_STYLE = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
  left: {
    // flex: 1,
    flexDirection: "row"
  },
  right: {
    flex: 1,
    flexDirection: "row-reverse"
  },
  app_name_container: {
    flexDirection: "row",
    padding: 5,
    // backgroundColor: APP_COLORS.WHITE_COLOR.color,
    // borderWidth: 1,
    // borderColor: APP_COLORS.GRAY_COLOR.color,
    // borderRadius: 5,
  },
  item: {
    padding: 7,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },
  item_label: {
    color: APP_COLORS.BLACK_COLOR.color,
    fontFamily: FONTS.regular
  }
});
