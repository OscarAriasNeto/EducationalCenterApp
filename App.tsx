import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/home-screen";
import TracksScreen from "./components/track-screen";
import ProfileScreen from "./components/profile-screen";
import GroupScreen from "./components/group-screen";
import TrailScreen from "./components/trail-screen";

export type RootStackParamList = {
  Home: undefined;
  Tracks: undefined;
  Profile: undefined;
  Group: undefined;
  Trail: { trailId: string };
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Group" component={GroupScreen} />
        <Stack.Screen name="Trail" component={TrailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
