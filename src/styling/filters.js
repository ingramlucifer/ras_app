import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { APP_COLORS } from "./colors";
import { FONTS } from "./polices";

export const FILTERS_STYLE = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
  top_left: {
    flex: 1,
  },
  top_center: {
    flex: 1,
    justifyContent: "center",
  },
  top_right: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  top_label: {
    color: APP_COLORS.BLACK_COLOR.color,
    textAlign: "center",
    fontFamily: FONTS.bold,
    fontSize: 19,
  },
  close: {
    width: Math.ceil(Dimensions.get("window").width / 12),
    height: Math.ceil(Dimensions.get("window").width / 12),
    backgroundColor: APP_COLORS.LIGHT_COLOR.color,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const SERVICES_FILTERS_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
  },
  card_container: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  card_left: {
    flexDirection: "row",
    padding: 5,
  },
  card_icon_container: {
    width: Math.ceil(Dimensions.get("window").width / 10),
    height: Math.ceil(Dimensions.get("window").width / 10),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  card_right: {
    padding: 5,
    flex: 1,

  },
  card_label: {
    fontFamily: FONTS.bold,
    fontSize: 16
  }
});
