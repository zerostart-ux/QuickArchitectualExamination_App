import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screen/HomeScreen';
import SelectionScreen from './src/screen/SelectionScreen';
import NumberScreen from './src/screen/NumberScreen';
import QuetionScreen from './src/screen/QuetionScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Select" component={SelectionScreen} />
      <Stack.Screen name="Num" component={NumberScreen} />
      <Stack.Screen name="quetion" component={QuetionScreen} />
    </Stack.Navigator>
    
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigator} options={{title:'HOME'}}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
