import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import ListItem from './ListItem';
import styles from "./styles";
import GoalInput from './GoalInput';

const Main = () => {
    const minLength = 1;
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoal = (goalTitle) => {
        setCourseGoals(courseGoals =>
            [
                ...courseGoals,
                {
                    key: courseGoals.length,
                    value: goalTitle
                },
            ]
        );
    }

    const removeItem = (indexToRemove) => {
        setCourseGoals(
            courseGoals.filter((_, index) => index !== indexToRemove)
        );
    }

    const addGoalHandler = goalTitle => {
        if (goalTitle === "Fill") {
            for (let i = 0; i < 100; i++) {
                setCourseGoals(courseGoals =>
                    [
                        ...courseGoals,
                        {
                            key: courseGoals.length,
                            value: "Fill Goal " + i,
                        },
                    ]
                );
            }
            setIsAddMode(false);
        } else {
            if (goalTitle.length > minLength) {
                addGoal(goalTitle);
                setIsAddMode(false);
            } else {
                const msg = "Too short Goal:\nJust " + goalTitle.length + " char(s)\nMinimum: " + (minLength + 1);
                alert(msg);
                console.log(msg);
            }
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.button}>
                <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            </View>
            <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={() => setIsAddMode(false)} />
            <FlatList
                data={courseGoals}
                renderItem={goal => <ListItem index={goal.index} value={goal.item.value} onDelete={removeItem} />}
            />
            <StatusBar />
        </View>
    );
}

export default Main;