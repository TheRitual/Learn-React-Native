import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from "./styles";

const Main = () => {
    const minLength = 5;
    const [enteredGoal, setEnteredGoal] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);
    

    const addGoal = () => {
        setCourseGoals(courseGoals =>
            [
                ...courseGoals,
                enteredGoal,
            ]
        );
    }

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        if(enteredGoal.length > minLength) {
            addGoal();
            setEnteredGoal("");
            console.log(courseGoals);
        } else {
            const msg = "Too short Goal:\nJust " + enteredGoal.length + " char(s)\nMinimum: " + minLength;
            alert(msg);
            console.log(msg);
        }
        
    }

    return (
        <View style={styles.screen}>
            <View style={styles.topPanel}>
                <TextInput value={enteredGoal} placeholder="Course Goal" onChangeText={goalInputHandler} style={styles.textInput} />
                <Button title="ADD" style={styles.button} onPress={() => addGoalHandler()} />
            </View>
            <View></View>
            <StatusBar />
        </View>
    );
}

export default Main;