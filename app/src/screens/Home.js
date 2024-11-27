import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PasswordContext } from "../contexts/PasswordContext";

export default function Home() {
  const navigation = useNavigation();
  const { addPassword } = useContext(PasswordContext);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789";
    let newPassword = "";
    for (let i = 0; i < 10; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
    addPassword(newPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senha Gerada:</Text>
      <Text style={styles.password}>{password}</Text>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("SavedPasswords")}
      >
        <Text style={styles.buttonText}>Ver Senhas Salvas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F3FF",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  password: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#3445D9",
    borderRadius: 5,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#AAA",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
