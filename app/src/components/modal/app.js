import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

export function ModalPassword({ password, handleClose }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada!</Text>
       
        <Pressable style={styles.innerPassword}>
          <Text style={styles.textPassword}>
            {password}
          </Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={[styles.button, styles.buttonBack]}
            onPress={handleClose} // Fechar o modal ao clicar
          >
            <Text style={styles.buttonBackText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: "90%",
    backgroundColor: "#FFF",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "85%",
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 7,
    justifyContent: 'center',
  },
  textPassword: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: 'center'
  },
  buttonArea: {
    flexDirection: "row", // Coloca os botões lado a lado
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
    padding: 10
  },
  buttonBack: {
    backgroundColor: "#CCC",
    marginRight: 10,
  },
  buttonBackText: {
    color: "#333",
    fontWeight: "bold",
  },
  buttonSave: {
    backgroundColor: "#3445D9",
  },
  buttonSaveText: {
    color: "#FFF",
    fontWeight: "bold"
  }
});
