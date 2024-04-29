import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '../assets/tkAgroLogo.png'
import { useNavigation } from '@react-navigation/native';

export default function Register() {

  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Image source={logo} style={styles.img}></Image>
        <TextInput placeholder='ID' selectionColor={'#000000'} style={styles.input} value={id} onChangeText={(text) => setId(text)}></TextInput>
        <TextInput placeholder='Password' style={styles.input} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
        <TextInput placeholder='Confirm Password' style={styles.input} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={() => console.log("Button Pressed!")}>
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.registerTxt} onPress={() => navigation.navigate("Login")} >Login</Text>
        <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
  img: {
    width: 260,
    height: 240,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 18,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#E3E3E3',
    backgroundColor: '#fff',
    fontSize: 18,
    width: '100%',
    maxWidth: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    borderRadius: 10,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    maxWidth: 300,
    paddingVertical: 10,
    borderRadius: 10,
    height: 50,

  },
  btnText: {
    height: 30,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',

  },
  registerTxt: {
    textDecorationLine: 'underline',
  }
});
