//暗記単語選択画面
import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from "react-native";

const SelectScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ScrollView >
            <Text>仮単語選択</Text>
            <Button title = "一問一答"
                onPress={ () => navigation.navigate("Glossary", { message:'hello'})}
                color="red"
            />
            <Button title = "暗記単語"
                onPress={ () => {alert("暗記単語ボタン")}}
            />
            <Button title = "苦手問題"
                onPress={ () => {alert("苦手問題ボタン")}}
            />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // 画面中央に表示
  container: {
    justifyContent: "center",
  },
});

export default SelectScreen;