import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import styles from "./styles";

const Main = () => {
    const minLength = 1;
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

    const removeItem = (indexToRemove) => {
        setCourseGoals(
                courseGoals.filter((_, index) => index !== indexToRemove)
        );
    }

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoal.length > minLength) {
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
            <View>
                {
                    courseGoals.map((goal, index) =>
                        <Button key={index} title={goal} onPress={() => { removeItem(index) }} />
                    )
                }
            </View>
            <StatusBar />
        </View>
    );
}

export default Main;