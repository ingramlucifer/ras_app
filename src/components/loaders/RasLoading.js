import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import LOADING_ANIMATION from "../../assets/animations/ras_loading.json";

export default function RasLoading({
  text = "Chargement ...",
  flex = 1,
  loop = true,
  width = Math.ceil(Dimensions.get("window").width / 3.5),
  height = Math.ceil(Dimensions.get("window").width / 3.5),
  center = true,
}) {
  return (
    <View
      style={{
        flex,
        ...(center && {
          justifyContent: "center",
          alignItems: "center",
        }),
      }}
    >
      <AnimatedLottieView
        source={LOADING_ANIMATION}
        style={{
          width,
          height,
        }}
        autoPlay
        loop={loop}
      />
      <Text style={{
      }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
