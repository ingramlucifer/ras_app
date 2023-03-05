import { View } from "react-native";
import React from "react";
import RasLoading from "./RasLoading";
import { APP_COLORS } from "../../styling/colors";

export default function FullLoadingContainer({}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: APP_COLORS.LIGHT_COLOR.color,
      }}
    >
      <RasLoading />
    </View>
  );
}
