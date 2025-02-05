import React from 'react';
import { Text, View, Button } from "react-native";

const NumberScreen = ({ navigation })=> {
  return (
    <View >
        <Text>Q1</Text>
        <Button title = "〇 or ×"
            onPress={ () => navigation.goBack()}
        />
    </View>
  );
}

export default NumberScreen;