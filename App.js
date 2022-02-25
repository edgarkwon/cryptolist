import React, { useEffect } from "react";
import { Text, View } from "react-native";
import auth from "@react-native-firebase/auth";

export default function App() {
  useEffect(() => {
    console.log(auth().currentUser);
  }, []);
  return (
    <View>
      <Text>Open up App!</Text>
    </View>
  );
}
