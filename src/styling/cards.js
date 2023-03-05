import { StyleSheet } from "react-native";
import { APP_COLORS } from "./colors";
import { FONTS } from "./polices";

export const ITEM_APPLICATION_CARD_STYLE = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    borderWidth: 1,
    borderColor: 'rgba(84, 3, 117, 0.1)'
  },
  top: {
    flexDirection: "row",
    padding: 5
  },
  top_right: {
    flexDirection: "row",
  },
  top_left: {
    flexDirection: "row",
    flex: 1,
  },
  service_container: {
    padding: 5,
    backgroundColor: 'rgba(84, 3, 117, 0.8)',//APP_COLORS.PRIMARY_COLOR.color,
    borderRadius: 5
  },
  service_name: {
    fontFamily: FONTS.regular,
    color: APP_COLORS.WHITE_COLOR.color
  },
  center: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  application_name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
  status: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  status_text: {
    color: APP_COLORS.WHITE_COLOR.color,
  }
});
