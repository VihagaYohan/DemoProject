import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// components
import MapViewScreen from "./app/screens/MapView";

export default function App() {
  return (
    <View style={styles.container}>
      <MapViewScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
