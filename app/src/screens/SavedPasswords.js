import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { PasswordContext } from "../contexts/PasswordContext.js";

const SavedPasswords = ({ navigation }) => {
  const { savedPasswords } = useContext(PasswordContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senhas Salvas</Text>

      {savedPasswords.length > 0 ? (
        <FlatList
          data={savedPasswords}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.password}>{item}</Text>
            </View>
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
  },
  password: {
    fontSize: 18,
    color: "#3445D9",
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
