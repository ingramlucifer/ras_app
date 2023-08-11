import { View, Text } from "react-native";
import React, { useState } from "react";
import { ITEM_APPLICATION_CARD_STYLE } from "../../../../styling/cards";
import {
  EApplicationStatus,
  getStatusColor,
  getStatusLabel,
} from "../../../../utils/system";

export default function ItemApplication({ item }) {
  const [statusColor, setStatusColor] = useState(getStatusColor(item.status));
  return (
    <View
      style={[
        ITEM_APPLICATION_CARD_STYLE.container,
        {
          // backgroundColor: getStatusColor(item.status),
        },
      ]}
    >
      {/* <View style={ITEM_APPLICATION_CARD_STYLE.top}>
        <View style={ITEM_APPLICATION_CARD_STYLE.top_left}>
          <View style={ITEM_APPLICATION_CARD_STYLE.service_container}>
            <Text style={ITEM_APPLICATION_CARD_STYLE.service_name}>
              {item.service}
            </Text>
          </View>
        </View>
        <View style={ITEM_APPLICATION_CARD_STYLE.top_right}>
          <Text></Text>
        </View>
      </View>
      <View style={ITEM_APPLICATION_CARD_STYLE.center}>
        <Text style={ITEM_APPLICATION_CARD_STYLE.application_name}>
          {item.label}
        </Text>
      </View> */}
      {/* <View
        style={[
          ITEM_APPLICATION_CARD_STYLE.status,
          {
            backgroundColor: getStatusColor(item.status),
          },
        ]}
      >
        <Text style={ITEM_APPLICATION_CARD_STYLE.status_text}>
          {getStatusLabel(item.status)}
        </Text>
      </View> */}
      <View style={ITEM_APPLICATION_CARD_STYLE.left}>
        <View
          style={[
            ITEM_APPLICATION_CARD_STYLE.status,
            {
              backgroundColor: statusColor.color,
              borderColor: statusColor.textColor,
            },
          ]}
        >
          <Text
            adjustsFontSizeToFit
            style={[
              ITEM_APPLICATION_CARD_STYLE.status_text,
              {
                color: statusColor.textColor,
              },
            ]}
          >
            {getStatusLabel(item.status)}
          </Text>
        </View>
      </View>
      <View style={ITEM_APPLICATION_CARD_STYLE.right}>
        <View style={[ITEM_APPLICATION_CARD_STYLE.service, {
          borderColor: statusColor.textColor,
        }]}>
          <Text style={ITEM_APPLICATION_CARD_STYLE.service_name}>
            {item.service}
          </Text>
        </View>
      </View>
    </View>
  );
}
