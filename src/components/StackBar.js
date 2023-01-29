import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Game from '../screens/Game'

const Stack = createStackNavigator();

export default function StackBar() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Main" component={Home} />
            <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
    );
}