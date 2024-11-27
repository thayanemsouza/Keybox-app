import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";
import { PasswordContext } from "../contexts/PasswordContext";
import * as Clipboard from "expo-clipboard"; // Importando expo-clipboard

export default function Home() {
  const navigation = useNavigation();
  const { addPassword } = useContext(PasswordContext);
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(6); // Tamanho inicial da senha

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789";
    let newPassword = "";
    for (let i = 0; i < size; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
    addPassword(newPassword);
  };

  const handleCopyPassword = async () => {
    if (password) {
      await Clipboard.setStringAsync(password); // Copia a senha
      Alert.alert("Senha copiada"); // Exibe o alerta
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/logo-keybox.png")}
        style={styles.logo}
      />

      {/* Título e tamanho do slider */}
      <Text style={styles.title}> {size} Caracteres</Text>

      {/* Slider */}
      <View style={styles.sliderContainer}>
        <Slider
          style={{ height: 20 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#3445D9"
          maximumTrackTintColor="#006E90"
          thumbTintColor="#3445D9"
          value={size}
          onValueChange={(value) => setSize(parseInt(value.toFixed(0)))}
        />
      </View>

      {/* Senha Gerada */}
      <Text style={styles.titlePassword}>Senha Gerada:</Text>
      <Text style={styles.password}>{password}</Text>

      <View style={styles.buttonArea}>

        {/* Botão para gerar senha */}
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>

        {/* Botão para ver senhas salvas */}
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate("SavedPasswords")}
        >
          <Text style={styles.buttonText}>Senhas Salvas</Text>
        </TouchableOpacity>
      </View>
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
  logo: {
    marginBottom: 30,
  },
  title: {
    marginBottom: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: "#1C1930",
  },
  sliderContainer: {
    width: "80%",
    marginBottom: 20,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
  },
  titlePassword: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  password: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  buttonArea: {
    flexDirection: "row", //coloca o texto dos botões lado a lado dentro do container
    width: "85%",
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    padding: 10,
    backgroundColor: "#3445D9",
  },
  secondaryButton: {
    backgroundColor: "#AAA",
    marginLeft: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
