import { View, Text } from 'react-native'
import React from 'react'
import { SAFE_AREA_VIEW } from '../../../styling/screnn'
import { SafeAreaView } from 'react-native'

export default function Profile({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <Text>Profile</Text>
    </SafeAreaView>
  )
}