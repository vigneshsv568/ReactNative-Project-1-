import React from "react";
import Screen from "./app/components/Screen";
import DemoScreen from "./app/screens/DemoScreen";

export default function App() {
  return (
    <Screen style={{ padding: 20 }}>
      <DemoScreen />
    </Screen>
  );
}
