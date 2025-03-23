import React from 'react';
import { Text, View, Button } from "react-native";

const QuetionScreen= ({ navigation })=> {
  return (
    <View >
        <Text>Q1</Text>
        <Text>問題文</Text>
        <Button title = "〇 or ×"
            onPress={ () => navigation.navigate("Answer")}
        />
    </View>
  );
}

export default QuetionScreen;