//暗記単語選択画面
import React from 'react';
import { Text, View, Button, StyleSheet, Image ,ScrollView } from "react-native";

const imagedata = require('../../image/test/job_kenchikuka.png')
const textWord = '暗記単語'

const GlossaryScreen = ({ route }) => {
  const {message} = route.params;
  return (
    <View style={styles.container}>
        <ScrollView >
        <Text style={styles.wordtext}>{message}</Text>
        <Text style={styles.wordtext}>{textWord}</Text>
        <Image source = {imagedata} />
        <Text style={styles.explanationtext}>用語解説</Text>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // 画面中央に表示
  container: {
    justifyContent: "center",
  },

  //テキスト
  wordtext:{
    fontSize: 18,
    fontWeight: 'normal',
    color: '#0000ff',
    backgroundColor: '#7cfc00'
  },
  explanationtext:{
    fontSize: 18,
    fontWeight: 'normal',
    color: '#0000ff',
    backgroundColor: '#7cfc00'
  },
});

export default GlossaryScreen;