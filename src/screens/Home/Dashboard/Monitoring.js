import { View, Text } from "react-native";
import React from "react";
import ApplicationsList from "../../../components/lists/ApplicationsList";

export default function Monitoring({}) {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Monitoring</Text> */}
      <ApplicationsList />
    </View>
  );
}
