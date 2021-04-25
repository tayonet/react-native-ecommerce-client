import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import Header from "./Shared/Header";
import { NavigationContainer } from "@react-navigation/native";

// Navigators

import Main from "./Navigators/Main";
//screens
import ProductContainer from "./screens/products/ProductContainer";

// LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <NavigationContainer>
      <Header />

      <Main />
    </NavigationContainer>
  );
}
