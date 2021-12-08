import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";

const ListItem = ({ value, index, onDelete }) => {
    return (
        <TouchableOpacity onPress={onDelete.bind(this, index)}>
            <View style={styles.listItem}>
                <Text style={styles.listItemIndex}>{index}</Text>
                <Text style={styles.listItemText}>{value}</Text>
            </View>
        </TouchableOpacity >
    );
}

export default ListItem;