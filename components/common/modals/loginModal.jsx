import { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import styles from './loginmodal.style';
 
const LoginModal = ({ modalVisible, setModalVisible}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Modal
    animationType="slide"
    transparent={false}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
   
  >
      <View style={styles.modalCard}>
      <Pressable  style={styles.closeBtn} onPress={() => setModalVisible(!modalVisible)}>
          <Text>Hide Modal</Text>
        </Pressable>
        <Text style={styles.loginHeaderText}>Log in</Text>
        <Text>Email:</Text>
        <TextInput onChangeText={setEmail} value={email}/>
        <Text>Password:</Text>
        <TextInput onChangeText={setPassword} value={password}/> 
        <Pressable onPress={() => console.log("handle login")}>
          <Text>Log in</Text>
        </Pressable>
      
      </View>
  </Modal>
)}

export default LoginModal