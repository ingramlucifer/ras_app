import { View, Text } from "react-native";
import React, { useState } from "react";
import { SAFE_AREA_VIEW } from "../../../styling/screnn";
import { SafeAreaView } from "react-native";
import HeaderDashboard from "../../../components/headers/HeaderDashboard";
import TabBarCategorisation from "../../../components/tabbar/TabBarCategorisation";
import BottomModal from "../../../components/modals/BottomModal";
import { APP_COLORS } from "../../../styling/colors";
import ServicesFilters from "../../../components/filters/ServicesFilters";
import { TABS } from "../../../utils/system";


export default function Dashboard({ navigation, route }) {
  const [activeTab, setActiveTab] = useState(0);
  const [showFilterServices, setShowFilterServices] = useState(false);

  const onShowFilterService = () => {
    setShowFilterServices(true);
  };

  const onChangeTab = ({ position }) => {
    setActiveTab(position);
  };

  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <HeaderDashboard onShowFilterService={onShowFilterService}/>
      <TabBarCategorisation
        sections={TABS || []}
        navigation={navigation}
        onChangeTab={onChangeTab}
        filterCategories={[]}
      />
      <BottomModal
        onClose={() => setShowFilterServices(false)}
        content={<ServicesFilters onClose={() => setShowFilterServices(false)}/>}
        showModal={showFilterServices}
        backgroundColor={APP_COLORS.WHITE_COLOR.color} //"rgba(255,255,255,0.95)"
        sliderBackgroundColor={APP_COLORS.PRIMARY_COLOR.color}
        borderWidth={2}
        borderColor={APP_COLORS.LIGHT_COLOR.color}
      />
    </SafeAreaView>
  );
}
