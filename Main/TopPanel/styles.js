import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    topPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    textInput: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        marginBottom: 10,
        color: "#000",
        flex: 2,
    },
    button: {
        flex: 1,
        margin: 3,
    }
});

export default styles;