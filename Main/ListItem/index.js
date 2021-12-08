import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

const ListItem = ({ value, index }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemIndex}>{index}</Text>
            <Text style={styles.listItemText}>{value}</Text>
        </View>
    );
}

export default ListItem;