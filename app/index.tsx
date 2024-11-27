import Slider from "@react-native-community/slider";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { useState } from 'react'
import { ModalPassword } from './src/components/modal/app.js'


let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789"

export default function Index() {

  const [size, setSize] = useState(6)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {

    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true);

  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo-keybox.png")}
        style={styles.logo}
      />
     
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
        style = {{ height: 20 }}
        minimumValue={6}
        maximumValue={20}
        minimumTrackTintColor="#3445D9"
        maximumTrackTintColor="#006E90"
        thumbTintColor="#3445D9"
        value={size}
        onValueChange={ (value) => setSize(parseInt(value.toFixed(0))) }
        />
      </View>
    
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}> Gerar senha </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/> 
      </Modal>

    </View>
  )
}

  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F3F3FF",

    },

    logo: {
      marginBottom: 60,
        },

    title: {
      marginBottom: 20,
      fontSize: 28,
      fontWeight: "bold",
      color: "#1C1930"
    },

    area: {
      marginBottom: 20,
      marginTop: 20,
      width: "80%",
      borderRadius: 6,
      backgroundColor: "#FFF",
      padding:18
    },

    button: {
      padding:10,
      height: 50,
      backgroundColor: "#3445D9",
      borderRadius: 6,
      width: "80%",
      alignItems: "center",
      justifyContent: "center"
    },

    buttonText: {
      fontSize: 18,
      color: "#FFF",
 

    }

    })