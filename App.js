// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import { todo } from './todo';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Main'>
        <Stack.Screen  name="Main"  component={MainScreen} />
        <Stack.Screen name="Todo List"   component={todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;