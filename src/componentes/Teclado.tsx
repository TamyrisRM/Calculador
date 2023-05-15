import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Estilos } from "../styles/GlobalStyles";
import { miCores } from "../styles/Cores";

export default function Teclado () {
    const[numeroUm, setNumeroUm] = React.useState("");
    const[numeroDois, setNumeroDois] = React.useState("");
    const[opera, setOpera] = React.useState("");
    const[result, setResult] = React.useState<Number | null >(null);

    const handleNumeroPress = (buttonValue: string) => {
        if (numeroUm.length < 10){
            setNumeroUm(numeroUm + buttonValue);
        }
    };
    const handleOperaPress = (buttonValue: string) => {
        setOpera(buttonValue);
        setNumeroDois(numeroUm);
        setNumeroUm("");
    };
    const limpar = () => {
        setNumeroUm("");
        setNumeroDois("");
        setOpera("");
        setResult(null);
    };
    const getResult = () => {
        switch (opera) {
            case "+":
                limpar();
                setResult(parseInt(numeroDois)+ parseInt(numeroUm));
                break;
            case "-":
                limpar();
                setResult(parseInt(numeroDois)- parseInt(numeroUm));
                break;
            case "*":
                limpar();
                setResult(parseInt(numeroDois)* parseInt(numeroUm));
                break;
            case "/":
                limpar();
                setResult(parseInt(numeroDois)/ parseInt(numeroUm));
                break;
        }
    }
    const primaNum = () => {
        if (result != null) {
            return <Text style={result < 99999 ? [Estilos.telaNumeroUm, {color: miCores.result}] : [Estilos.telaNumeroUm, {fontSize: 50, color:miCores.result}]}>{result?.toString()}</Text>
        }
        if (numeroUm && numeroUm.length < 6){
            return <Text style={Estilos.telaNumeroUm}>{"0"}</Text>
        }
        if (numeroUm == ""){
            return <Text style={Estilos.telaNumeroUm}>{"0"}</Text>
        }
        if (numeroUm.length > 5 && numeroUm.length < 8) {
            return (
                <Text style={[Estilos.telaNumeroUm, {fontSize: 70}]}>{numeroUm}</Text>
            );
        }
        if (numeroUm.length > 7) {
            return(
                <Text style={[Estilos.telaNumeroUm, {fontSize: 50}]}>{numeroUm}</Text>
            );
        }
    };
    return (
        <View style={Estilos.verBotao}>
        <View  style={{
            height: 120,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center"
        }}
        >
        <Text style={Estilos.telaNumeroDois}>{numeroDois}
        <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{opera}</Text></Text>
        {primaNum()}
        </View>
        <View style={Estilos.linha}>
            <Button title="C"  onPress={limpar} />
            <Button title="+/-" eCinza onPress={() => handleOperaPress("+/-")} />
            <Button title="%" eCinza onPress={() => handleOperaPress("%")} />
            <Button title="÷" eAzul onPress={() => handleOperaPress("/")} />
        </View>
        <View style={Estilos.linha}>
            <Button title="7" onPress={() => handleNumeroPress("7")} />
            <Button title='8' onPress={() => handleNumeroPress("8")} />
            <Button title="9" onPress={() => handleNumeroPress("9")} />
            <Button title="x" eAzul onPress={() => handleNumeroPress("*")} />
        </View>
        <View style={Estilos.linha}>
            <Button title="4" onPress={() => handleNumeroPress("4")} />
            <Button title="5" onPress={() => handleNumeroPress("5")} />
            <Button title="6" onPress={() => handleNumeroPress("6")} />
            <Button title="-" eAzul onPress={() => handleOperaPress("-")} />
        </View>
        <View style={Estilos.linha}>
            <Button title="1" onPress={() => handleNumeroPress("1")} />
            <Button title="2" onPress={() => handleNumeroPress("2")} />
            <Button title="3" onPress={() => handleNumeroPress("3")} />
            <Button title="+" eAzul onPress={() => handleOperaPress("+")} />
        </View>
        <View style={Estilos.linha}>
            <Button title="." onPress={() => handleNumeroPress(".")} />
            <Button title="0" onPress={() => handleNumeroPress("0")} />
            <Button title="CC" onPress={() => setNumeroUm(numeroUm.slice(0, -1))} />
            <Button title="=" eAzul onPress={() => getResult()} />
        </View>
        </View>
    )
}