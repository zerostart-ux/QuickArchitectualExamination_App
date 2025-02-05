import React from 'react';
import { Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>一級建築士試験対策</Text>
      <Button title = "一問一答"
        onPress={ () => navigation.navigate("Select")}
        color="red"
      />
      <Button title = "暗記単語"
        onPress={ () => {alert("暗記単語ボタン")}}
      />
      <Button title = "苦手問題"
        onPress={ () => {alert("苦手問題ボタン")}}
      />
    </View>
  );
}

export default HomeScreen;