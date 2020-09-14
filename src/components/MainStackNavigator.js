import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from './BookScreen';
import BookDetailScreen from './BookDetailScreen';
import AddBookScreen from './AddBookScreen';
import EditBookScreen from './EditBookScreen';

const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home' 
                    component={BookScreen} 
                />
                <Stack.Screen
                    name="Book Details"
                    component={BookDetailScreen}
                    options={{
                        title: 'Book Details',
                    }}
                />
                <Stack.Screen
                    name="Add Book"
                    component={AddBookScreen}
                    options={{
                        title: 'Add Book',
                    }}
                />
                <Stack.Screen
                    name="Edit Book"
                    component={EditBookScreen}
                    options={{
                        title: 'Edit Book',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;