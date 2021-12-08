import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import styles from "./styles";

const TopPanel = ({ onAddGoal }) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const onAddGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <View style={styles.topPanel}>
            <TextInput value={enteredGoal} placeholder="Course Goal" onChangeText={goalInputHandler} style={styles.textInput} />
            <Button title="ADD" style={styles.button} onPress={onAddGoalHandler} />
        </View>
    );
}

export default TopPanel;