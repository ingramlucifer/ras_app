import { View, Text } from "react-native";
import React, { useState } from "react";
import { FILTERS_STYLE, SERVICES_FILTERS_STYLE } from "../../styling/filters";
import { AntDesign } from "@expo/vector-icons";
import { APP_COLORS } from "../../styling/colors";
import DefaultInput from "../DefaultInput";
import ServicesFiltersList from "../lists/ServicesFiltersList";
import { TouchableOpacity } from "react-native";

export default function ServicesFilters({ onClose }) {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={SERVICES_FILTERS_STYLE.container}>
      <View style={FILTERS_STYLE.top}>
        <View style={FILTERS_STYLE.top_left}>
          <TouchableOpacity style={FILTERS_STYLE.close} onPress={onClose}>
            <AntDesign
              name="close"
              size={24}
              color={APP_COLORS.PRIMARY_COLOR.color}
            />
          </TouchableOpacity>
        </View>
        <View style={FILTERS_STYLE.top_center}>
          <Text style={FILTERS_STYLE.top_label}>Services</Text>
        </View>
        <View style={FILTERS_STYLE.top_right}></View>
      </View>
      <View>
        <DefaultInput
          placeholder="Service"
          value={searchText}
          onValueChange={(value) => setSearchText(value)}
          customTextAlign="left"
        />
      </View>
      <ServicesFiltersList/>
    </View>
  );
}
