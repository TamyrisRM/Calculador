import { StyleSheet } from "react-native";
import { miCores } from "./Cores";

export const Estilos = StyleSheet.create({
    btnAzul: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: miCores.azul,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: miCores.dark,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: miCores.branco,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    btnCinza: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: miCores.btnCinza,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    lilTextoClaro: {
        fontSize: 32,
        color: miCores.branco,
    },
    lilTextoEscuro: {
        fontSize: 32,
        color: miCores.preto,
    },
    linha: {
        maxWidth: '100%',
        flexDirection: 'row',
    },
    verBotao: {
        position: 'absolute',
        bottom: 50,
    },
    telaNumeroUm: {
        fontSize:96,
        color: miCores.cinza,
        fontWeight: 200,
        alignSelf:"flex-end"
    },
    telaNumeroDois: {
        fontSize: 40,
        color: miCores.cinza,
        fontWeight: 200,
        alignSelf: "flex-end",
    },
})