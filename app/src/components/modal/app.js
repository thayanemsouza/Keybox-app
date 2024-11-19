import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard'

export function ModalPassword({password, handleClose}) {

    async function handleCopyPassword (params) {
        await Clipboard.setStringAsync(password)
        alert("Senha copiada com sucesso!")
    }

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Senha gerada</Text>
       
            <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                <Text style={styles.textPassword}>
                    {password}
                </Text>
            </Pressable>

            <View style={styles.buttonArea}>
                <TouchableOpacity style={[styles.button, styles.buttonBack]} onPress={handleClose}>
                    <Text style={styles.buttonBackText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                    <Text style={styles.buttonSaveText}>Salvar senha</Text>
                </TouchableOpacity>
            </View>

        </View>
      </View>
    </Modal>
  )
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
        padding: 10
    },
    buttonSave: {
        backgroundColor: "#3445D9",
    },
    buttonSaveText: {
        color: "#FFF",
        fontWeight: "bold"
    },
    buttonBack: {
        backgroundColor: "#FFF",
    },
})