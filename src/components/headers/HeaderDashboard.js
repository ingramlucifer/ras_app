import { View, Text } from "react-native";
import React from "react";
import { DASHBOARD_HEADER_STYLE } from "../../styling/headers";
import { APP_STYLE } from "../../styling/system";
import { TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const ICON_SIZE = 18;

export default function HeaderDashboard({ onShowFilterService }) {
  return (
    <View style={DASHBOARD_HEADER_STYLE.container}>
      <View style={DASHBOARD_HEADER_STYLE.left}>
        <View style={DASHBOARD_HEADER_STYLE.app_name_container}>
          <Text style={APP_STYLE.app_name}>My SMC</Text>
        </View>
      </View>
      <View style={DASHBOARD_HEADER_STYLE.right}>
      <TouchableOpacity style={DASHBOARD_HEADER_STYLE.item}>
          <MaterialCommunityIcons name="application-brackets-outline" size={ICON_SIZE} color="black" />
          <Text style={DASHBOARD_HEADER_STYLE.item_label}>{" Statuts"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={DASHBOARD_HEADER_STYLE.item}>
          <MaterialCommunityIcons name="application-brackets-outline" size={ICON_SIZE} color="black" />
          <Text style={DASHBOARD_HEADER_STYLE.item_label}>{" Applications"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={DASHBOARD_HEADER_STYLE.item} onPress={() => onShowFilterService()}>
          <FontAwesome5 name="server" size={ICON_SIZE} color="black" />
          <Text style={DASHBOARD_HEADER_STYLE.item_label}>{" Services"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
