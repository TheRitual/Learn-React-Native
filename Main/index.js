import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, TextInput, View, ScrollView, FlatList } from 'react-native';
import ListItem from './ListItem';
import styles from "./styles";
import TopPanel from './TopPanel';

const Main = () => {
    const minLength = 1;
    const [courseGoals, setCourseGoals] = useState([]);

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
            for (let i = 0; i < 1000; i++) {
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
        } else {
            if (goalTitle.length > minLength) {
                addGoal(goalTitle);
                console.log(courseGoals);
            } else {
                const msg = "Too short Goal:\nJust " + goalTitle.length + " char(s)\nMinimum: " + (minLength + 1);
                alert(msg);
                console.log(msg);
            }
        }
    }

    return (
        <View style={styles.screen}>
            <TopPanel onAddGoal={addGoalHandler} />
            <FlatList
                data={courseGoals}
                renderItem={goal => <ListItem index={goal.index} value={goal.item.value} onPress={() => removeItem(goal.index)} />}
            />
            <StatusBar />
        </View>
    );
}

export default Main;