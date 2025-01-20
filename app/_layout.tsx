import React from "react";

import { Stack } from "expo-router";
import { Provider } from "react-redux";

import store from "store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(HomeScreen)"
          options={{
            headerShown: true,
            headerTitle: "HomeScreen",
          }}
        />
        <Stack.Screen
          name="(TaskDetails)"
          options={{
            headerShown: true,
            headerTitle: "TaskDetails",
          }}
        />
      </Stack>
    </Provider>
  );
}
