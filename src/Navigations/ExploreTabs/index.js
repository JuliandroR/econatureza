import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import Explore from "../../pages/Explore";
import ViewMap from "../../pages/ViewMap";
import GoToLogin from "../../pages/GoToLogin";

const ExploreTabStack = createBottomTabNavigator();

export default function ExploreTabs() {
  return (
    <ExploreTabStack.Navigator>
      <ExploreTabStack.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" size={24} color="#885500" />
          ),
        }}
      />

      <ExploreTabStack.Screen
        name="ViewMap"
        component={ViewMap}
        options={{
          tabBarLabel: "Mapa",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-search"
              size={24}
              color="#885500"
            />
          ),
        }}
      />

      <ExploreTabStack.Screen
        name="GoToLogin"
        component={GoToLogin}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={24} color="#885500" />
          ),
        }}
      />
    </ExploreTabStack.Navigator>
  );
}
