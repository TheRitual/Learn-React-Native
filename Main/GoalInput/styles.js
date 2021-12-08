import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        marginBottom: 10,
        color: "#000",
        width: "90%",
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        alignContent: "stretch",
        width: "60%",
    },
    button: {
        width: "45%",
    }
});

export default styles;