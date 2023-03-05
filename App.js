import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootSiblingParent } from "react-native-root-siblings";
import {initialWindowMetrics,SafeAreaProvider,} from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Navigation from './src/navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#72065b",
    accent: "#f1c40f",
    background: "red",
  },
  dark: true,
};

export default function App() {
  return (
     <PaperProvider theme={theme}>
      <RootSiblingParent>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigation /> 
        </SafeAreaProvider>
      </RootSiblingParent>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
