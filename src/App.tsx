import { Alert, SafeAreaView, StatusBar } from "react-native";
import { StyleSheet, Text, View, Switch } from "react-native";
import { Tema } from "./contexto/Tema";
import { useState } from "react";
import { miCores } from "./styles/Cores";
import Button from "./componentes/Button";
import Teclado from "./componentes/Teclado";

export default function App() {
  const [tema, setTema] = useState('light');
  return(
    <>
    <Tema.Provider value={tema}>
    <SafeAreaView style={tema == 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
        <StatusBar/>
      <Switch value={tema == 'light'}
      onValueChange={() => setTema(tema == 'light' ? 'dark' : 'light')}/>
      <Teclado/>
    </SafeAreaView>
    </Tema.Provider>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: miCores.light,
    justifyContent: 'center',
    alignContent: 'flex-start',
  }
})