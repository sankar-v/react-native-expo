import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from './BookScreen';

const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={BookScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;