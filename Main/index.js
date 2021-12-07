import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from "./styles";

const Main = () => {
    const [buttonText, setButtonText] = useState("Who do I love?");
    
    return (
        <View style={styles.screen}>
            <View style={styles.topPanel}>
                <TextInput placeholder="Course Goal" style={styles.textInput} />
                <Button title="ADD" style={styles.button} />
            </View>
            <View></View>
            <StatusBar />
        </View>
    );
}

export default Main;