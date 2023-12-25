import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CARD_SERVICE_STYLE } from "../../../styling/cards";

export default function ServiceCard({ data }) {
  const getFirstChar = (nom = "") => {
    try {
      const parts = data.nom.includes("_")
        ? data.nom.split("_")
        : data.nom.includes(" ")
        ? data.nom.split(" ")
        : [];
        
      if (parts?.length) {
        let value = "";
        for (const part of parts) {
            console.log(part)
          value += part.charAt(0).toUpperCase();
        }
        return value;
      } else {
        return data.nom.charAt(0).toUpperCase();
      }
    } catch (error) {
      return "";
    }
  };
  return (
    <TouchableOpacity style={CARD_SERVICE_STYLE.main} activeOpacity={0.7}>
      <View style={CARD_SERVICE_STYLE.left_preview}>
        <Text style={CARD_SERVICE_STYLE.left_preview_title}>
          {getFirstChar()}
        </Text>
      </View>
      <View style={CARD_SERVICE_STYLE.right}>
        <Text style={CARD_SERVICE_STYLE.title}>
          {data.nom}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
