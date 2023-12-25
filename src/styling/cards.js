import { StyleSheet } from "react-native";
import { APP_COLORS } from "./colors";
import { FONTS } from "./polices";
import { Dimensions } from "react-native";

const ITEM_HEIGHT = Math.ceil(Dimensions.get("screen").width / 8);
const PREVIEW_SIZE = Math.ceil(Dimensions.get("screen").width / 8);

export const ITEM_APPLICATION_CARD_STYLE = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "yellow"
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
    fontFamily: FONTS.bold,
  },


  left: {
    flex: 1,
  },
  right: {
    flex: 2.5,
  },
  service: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    borderRightWidth: 2,
    backgroundColor: APP_COLORS.WHITE_COLOR.color,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  service_name: {
    marginLeft: 5,
    fontFamily: FONTS.bold,
    color: APP_COLORS.BLACK_COLOR.color,
    fontSize: 16
  },
  status: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    // width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

});

export const CARD_SERVICE_STYLE = StyleSheet.create({
  main: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    elevation: 1,
    shadowColor: '#DCDADA',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  left_preview:{
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    backgroundColor: APP_COLORS.SECONDARY_COLOR.color,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  left_preview_title: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: APP_COLORS.WHITE_COLOR.color
  },
  right: {
    flex: 1,
    marginLeft: 5
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    // color: APP_COLORS.WHITE_COLOR.color
  }
})
