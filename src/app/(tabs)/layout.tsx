
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF6347",
        tabBarInactiveTintColor: "#808080",
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Play Game",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="game-controller"
              size={size || 24}
              color={
                typeof color === "string"
                  ? color
                  : "#000000"
              }
            />
          ),
        }}
      />

      <Tabs.Screen
        name="rules"
        options={{
          title: "Rules",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle"
              size={size || 24}
              color={
                typeof color === "string"
                  ? color
                  : "#000000"
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
