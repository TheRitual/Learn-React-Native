import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [buttonText, setButtonText] = useState("Who do I love?");

  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center" }}>
        <TextInput placeholder="Course Goal" style={{ borderBottomColor: "#000", borderBottomWidth: 1, marginBottom: 10, color: "#000" }} />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({

});
