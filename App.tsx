import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/home-screen";
import TracksScreen from "./components/track-screen";

export type RootStackParamList = {
  Home: undefined;
  Tracks: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tracks" component={TracksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
