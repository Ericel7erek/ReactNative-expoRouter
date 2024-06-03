import { Stack, Tabs, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "react-native";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function TabLayout() {
   const { id } = useLocalSearchParams();


  return (
<>
    <Stack>
      <Stack.Screen name="mercado" options={{title: "dada"}}/>
      <Stack.Screen name="product/[id]" options={{title: `${id}`}}/>
    </Stack>

    </>
  )
}
