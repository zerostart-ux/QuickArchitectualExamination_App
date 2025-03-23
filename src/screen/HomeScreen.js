import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

//HOME画面
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>一級建築士試験対策</Text>
      </View>
      <View >
        <TouchableOpacity style={styles.button}
           onPress={ () => navigation.navigate("Select")}>
           <Text style={styles.text}>暗記単語</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 画面中央に表示
  container: {
    flex: 1,
    justifyContent: "center",
  },
  //ボタン
  button:{
        backgroundColor: '#ff0000'
  },
  //テキスト
  title:{
    fontSize: 30,
    fontWeight: 'normal',
    color: '#0000ff',
    backgroundColor: '#7cfc00'
  },
  text:{
    fontSize: 18,
    fontWeight: 'normal',
    color: '#0000ff',
  },
});

export default HomeScreen;