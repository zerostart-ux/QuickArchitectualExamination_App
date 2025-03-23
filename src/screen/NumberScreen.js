import React from 'react';
import { Text, View, Button } from "react-native";
import { CheckBox } from 'react-native-elements';

const NumberScreen = ({ navigation })=> {
  return (
    <View >
        <Text>問題数</Text>
        <CheckBox title = '10問'/>
        <CheckBox title = '20問'/>
        <CheckBox title = '30問'/>
        <CheckBox title = '40問'/>
        <CheckBox title = '50問'/>
        <CheckBox title = '60問'/>
        <CheckBox title = '70問'/>
        <CheckBox title = '80問'/>
        <Button title = "開始"
            onPress={ () => navigation.navigate("Quetion")}
        />
    </View>
  );
}

export default NumberScreen;