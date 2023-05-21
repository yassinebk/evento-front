import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from "react-native";

import { Button, Paragraph, Spacer, TamaguiProvider, Theme, YStack } from "tamagui";
import config from "./tamagui.config";
export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "light" ? "light" : "dark"}>
        <NavigationContainer>
          <YStack
            f={1}
            jc="center"
            ai="center"
            backgroundColor={"$backgroundSoft"}
          >

            <Paragraph color="$color" jc="center">
              {colorScheme}
            </Paragraph>
            <Button theme={"alt2"} backgroundColor="$blue10">Meow</Button>

            <StatusBar style="auto" />
          </YStack>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}
