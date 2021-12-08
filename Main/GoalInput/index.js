import React, { useState } from "react";
import { Button, Modal, TextInput, View } from "react-native";
import styles from "./styles";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={visible} animationType="fade" >
            <View style={styles.inputContainer}>
                <TextInput value={enteredGoal} placeholder="Course Goal" onChangeText={goalInputHandler} style={styles.textInput} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="ADD" onPress={onAddGoal.bind(this, enteredGoal)} /></View>
                    <View style={styles.button}><Button title="CANCEL" color="#8d1b1b" onPress={onCancel} /></View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;