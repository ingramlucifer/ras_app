import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { APP_COLORS } from "../styling/colors";
import { VIEWS_NAME } from "../utils/system";
import Dashboard from "./Home/Dashboard";
import Profile from "./Home/Profile";
import Settings from "./Home/Settings";

const Tabs = AnimatedTabBarNavigator();

export default ({ navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName={VIEWS_NAME.Dashboard}
      tabBarOptions={{
        activeBackgroundColor: APP_COLORS.PRIMARY_COLOR.color,
        activeTintColor: APP_COLORS.WHITE_COLOR.color,
        inactiveTintColor: APP_COLORS.BLACK_COLOR.color,
        showLabel: true,
        tabStyle: {
          backgroundColor: "#FFF",
          borderColor: APP_COLORS.TERTIARY_COLOR.color,
          // borderTopWidth: 1,
          elevation: 1,
        },
        style: {
          position: "absolute",
        },
        tabBarHideOnKeyboard: true,
      }}
      appearance={{
        topPadding: 7,
        horizontalPadding: 10,
        // whenActiveShow: "icon-only",
        whenInactiveShow: "icon-only",
      }}
    >
      <Tabs.Screen
        name={VIEWS_NAME.Profile}
        component={Profile}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="user"
              size={size - 3}
              color={focused ? color : APP_COLORS.BLACK_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Dashboard}
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size, focused }) => (
            // <Octicons
            //   name="home"
            //   size={size - 3}
            //   color={focused ? color : APP_COLORS.BLACK_COLOR.color}
            // />
            <AntDesign
              name="dashboard"
              size={size - 3}
              color={focused ? color : APP_COLORS.BLACK_COLOR.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={VIEWS_NAME.Settings}
        component={Settings}
        options={{
          tabBarLabel: "Params",
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="settings"
              size={size - 3}
              color={focused ? color : APP_COLORS.BLACK_COLOR.color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
