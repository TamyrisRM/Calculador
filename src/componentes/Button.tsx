import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Tema } from "../contexto/Tema";
import { Estilos } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    eAzul?: boolean;
    eCinza?: boolean;
}

export default function Button({ title, onPress,eAzul, eCinza}: ButtonProps){
    const tema = useContext(Tema);
    return (
        <TouchableOpacity 
        style={
            eAzul
            ? Estilos.btnAzul
            :eCinza
            ?Estilos.btnCinza
            :tema == 'light'
            ? Estilos.btnLight
            :Estilos.btnDark
        }
        onPress={onPress}>
        <Text style={
            eAzul || eCinza
            ? Estilos.lilTextoClaro : tema == 'dark'
            ?Estilos.lilTextoClaro
            :Estilos.lilTextoEscuro
        }
        >
            (title)
        </Text>
        </TouchableOpacity>
    )
}