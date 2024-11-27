import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard"; // Importando expo-clipboard
import { PasswordContext } from "../contexts/PasswordContext";

const SavedPasswords = ({ navigation }) => {
  const { savedPasswords } = useContext(PasswordContext);

  const handleCopyPassword = async (password) => {
    await Clipboard.setStringAsync(password); // Copia a senha
    Alert.alert("Senha copiada"); // Exibe o alerta
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senhas Salvas</Text>

      {savedPasswords.length > 0 ? (
        <FlatList
          data={savedPasswords}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pressable
              style={styles.item}
              onLongPress={() => handleCopyPassword(item)}
            >
              <Text style={styles.password}>{item}</Text>
            </Pressable>
          )}
        />
      ) : (
        <Text style={styles.noPasswords}>Nenhuma senha salva ainda.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F3F3FF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#1C1930",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#e9e9e9",
    borderRadius: 5,
    marginBottom: 10,
  },
  password: {
    fontSize: 18,
    color: "#3445D9",
    textAlign: "center",
  },
  noPasswords: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
  button: {
    padding: 10,
    height: 50,
    backgroundColor: "#3445D9",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
  },
});

export default SavedPasswords;
