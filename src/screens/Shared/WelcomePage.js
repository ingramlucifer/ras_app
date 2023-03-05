import React from "react";
import { SafeAreaView, View } from "react-native";

import RasLoading from "../../components/loaders/RasLoading";
import { SAFE_AREA_VIEW } from "../../styling/screnn";
import { APP_STYLE } from "../../styling/system";


export default function WelcomPage({}) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <View style={APP_STYLE.container_waiting_load_finish}>
        <RasLoading text="Bienvenue" />
      </View>
    </SafeAreaView>
  );
}
