import { View, Text, FlatList, ActivityIndicator,  RefreshControl } from "react-native";
import React, { useCallback, useState } from "react";
import ServiceCard from "../../../components/cards/services/service";
import { APP_COLORS } from "../../../styling/colors";

const DATA = [
  {
    code: 1,
    nom: "SICLI",
  },
  {
    code: 2,
    nom: "CORPORATE",
  },
  {
    code: 3,
    nom: "SELF BUSINESS",
  },
  {
    code: 4,
    nom: "DESC",
  },
  {
    code: 5,
    nom: "MOBILE_ORANGE_MONEY",
  },
  {
    code: 6,
    nom: "ROBOT SABLUX",
  },
  {
    code: 7,
    nom: "CUSTOMER CARE",
  },
  {
    code: 8,
    nom: "MOBILE_ORANGE_ET_MOI",
  },
  {
    code: 9,
    nom: "DRPS",
  },
  {
    code: 10,
    nom: "SOAP",
  },
  {
    code: 11,
    nom: "MOBILE_SUGU_ANDROID",
  },
  {
    code: 12,
    nom: "MOBILE_COMPARAISON",
  },
  {
    code: 13,
    nom: "MOBILE",
  },
  {
    code: 14,
    nom: "MOBILE_DISTRI",
  },
  {
    code: 15,
    nom: "CHATBOT",
  },
  {
    code: 16,
    nom: "TEST_AUTOMATISES",
  },
  {
    code: 17,
    nom: "MOBILE_IOS_SUGU",
  },
];

export default function Services({}) {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const [isRetreivingData, setIsRetreivingData] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const renderItems = useCallback(
    ({ item, index }) => (
      <ServiceCard
        data={item}
        key={item.code}
        // onClick={onClickService}
        // isSelected={getSelectedService(item)}
        //   onClick={onOpenPlace}
        //   limitedDescription
        // onShowProfile={onShowProfile}
        // onShowPublicationImages={onShowPublicationImages}
      />
    ),
    []
  );

  const keyExtractor = useCallback((item) => item.code, []);

  const onEndReached = () => {};

  const onRefreshData = () => {};

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{
          backgroundColor: "transparent",
          flex: 1,
        }}
        disableIntervalMomentum
        data={DATA || []}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={6}
        onEndReachedThreshold={0.5}
        updateCellsBatchingPeriod={100}
        initialNumToRender={6}
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefreshData}
            tintColor={APP_COLORS.PRIMARY_COLOR.color}
            progressBackgroundColor={APP_COLORS.PRIMARY_COLOR.color}
            colors={[APP_COLORS.PRIMARY_COLOR.color]}
          />
        }
        onRefresh={onRefreshData}
        onEndReached={() => onEndReached()}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          isRetreivingData && (
            <ActivityIndicator
              size="small"
              color={APP_COLORS.YELLOW_COLOR.color}
            />
          )
        }
      />
    </View>
  );
}
