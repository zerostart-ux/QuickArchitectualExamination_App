import React from 'react';
import { Text, View, Button } from "react-native";

const AnswerScreen = ({ navigation }) => {
  return (
    <View>
        <Text>問題文</Text>
        <Text>A.〇 or × </Text>
        <Text>説明文</Text>
        <Button title = "OK"
            onPress={ () => navigation.navigate("Quetion")}
        />
    </View>
  );
}

export default AnswerScreen;