import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./components/login-screen";
import SignUpScreen from "./components/signup-screen";
import HomeScreen from "./components/home-screen";
import TracksScreen from "./components/track-screen";
import ProfileScreen from "./components/profile-screen";
import GroupScreen from "./components/group-screen";
import TrailScreen from "./components/trail-screen";
import EditProfileScreen from "./components/edit-profile-screen";
import GroupChatScreen from "./components/group-chat-screen";

import { ProgressProvider } from "./components/progress-context";
import { UserProvider } from "./components/user-context";
import { GroupChatProvider } from "./components/group-chat-context";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Tracks: undefined;
  Profile: undefined;
  Group: undefined;
  Trail: { trailId: string };
  EditProfile: undefined;
  GroupChat: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <UserProvider>
      <ProgressProvider>
        <GroupChatProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Tracks" component={TracksScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Group" component={GroupScreen} />
              <Stack.Screen name="Trail" component={TrailScreen} />
              <Stack.Screen name="EditProfile" component={EditProfileScreen} />
              <Stack.Screen name="GroupChat" component={GroupChatScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </GroupChatProvider>
      </ProgressProvider>
    </UserProvider>
  );
}
