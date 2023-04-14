import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111418',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF'
    },
    textoLogin: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        paddingBottom: 30
    },
    google: {
        width: 100,
        height: 44,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'red'
    },
    roundButton1: {
        marginBottom: '2%',
        marginLeft: '78%',
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'tomato',
    },
    texto: {
        fontSize: 35,
        color: "white"
    },
    button: {
        marginTop: 5,
        marginRight: 5,
        backgroundColor: '#6D6D6C',
        borderColor: '#313833',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderRightWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
    },
    simpleButton: {
        alignItems: 'center',
        backgroundColor: '#313338',
        padding: 10,
    },
    buttonFooter: {
        height: 60,
        width: '33.34%',
        backgroundColor: '#313338',
        padding: 10,
        borderLeftColor: 'white',
        borderTopColor: 'white',
        borderWidth: 1,
        borderRightWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
    },
    botonComida: {
        paddingTop: "3%",
        width: "35%",
        height: "8%",
        borderRadius: 10,
        backgroundColor: 'skyblue',
        alignItems: "center",
        verticalAlign: "center"
    },
    textoComida: {
        fontSize: 20,
        color: "white",
        textAlign: 'center'
    },
    tituloComida: {
        fontSize: 26,
        color: "white",
        textAlign: 'center'
    },
    inputTexto: {
        borderWidth: 2,
        borderColor: "skyblue",
        margin: 15,
        color: "#fff",
        borderRadius: 10,
        paddingLeft: 10,
        width: '50%'
    }
});