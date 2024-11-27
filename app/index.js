import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { PasswordProvider } from "./src/contexts/PasswordContext";

export default function App() {
  return (
    <PasswordProvider>
      <AppNavigator />
    </PasswordProvider>
  );
}
