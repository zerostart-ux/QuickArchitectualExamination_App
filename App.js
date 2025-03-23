import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screen/HomeScreen';

import SelectionScreen from './src/screen/SelectionScreen';
import NumberScreen from './src/screen/NumberScreen';
import QuetionScreen from './src/screen/QuetionScreen';
import AnswerScreen from './src/screen/AnswerScreen';

import SelectScreen from './src/screen/SelectScreen';
import GlossaryScreen from './src/screen/GlossaryScreen';

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Select" component={SelectScreen} />
      <Stack.Screen name="Glossary" component={GlossaryScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}
