import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StatsFirstPage from "./StatsFirstPage";
import PageDelayConfigured from "./PageDelayConfigured";
import React, { useContext, useState } from "react";
import LandingPage from "./LandingPage";
import { RoundContext } from "../Contexts/RoundContext";

const Stack = createStackNavigator();

const MyStack = () => {
  const { selectedValueRound, setSelectedValueRound } =
    useContext(RoundContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{
            headerShown: false,
            title: "",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={StatsFirstPage}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="PageTwoDelay"
          component={PageDelayConfigured}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
