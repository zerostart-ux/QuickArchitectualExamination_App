import React from 'react';
import { Text, View, Button } from "react-native";

const ItemSelection = ({ navigation })=> {
  return (
    <View >
      <Button title = "計画"
        onPress={ () => navigation.navigate("Home")}
      />
      <Button title = "法現"
        onPress={ () => navigation.goBack()}
      />
      <Button title = "施工"
        onPress={ () => navigation.navigate("Num")}
      />
      <Button title = "環境設備"
        onPress={ () => {alert("苦手問題ボタン")}}
      />
      <Button title = "構造"
        onPress={ () => {alert("苦手問題ボタン")}}
      />
      <Button title = "ランダム"
        onPress={ () => {alert("苦手問題ボタン")}}
      />
    </View>
  );
}

export default ItemSelection;