import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { SAFE_AREA_VIEW } from '../../../styling/screnn'

export default function Settings({ navigation, route }) {
  return (
    <SafeAreaView style={[SAFE_AREA_VIEW.container]}>
      <Text>Paramètres</Text>
    </SafeAreaView>
  )
}