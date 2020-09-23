import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem, Button } from 'react-native-elements';
import BookScreen from './BookScreen';
import BookDetailScreen from './BookDetailScreen';
import AddBookScreen from './AddBookScreen';
import EditBookScreen from './EditBookScreen';

const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({route, navigation}) => ({
                    headerStyle: {
                      backgroundColor: '#f4511e',
                    },
                    headerRight: () => (
                      <Button
                        // only alert is ok, the other is error.
                        onPress={() => navigation.navigate('Home')}
                        title="Logout"
                        color="#fff"
                      />
                    ),
                
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  })}
                >
                <Stack.Screen 
                    name='Home' 
                    component={BookScreen} 
                    options={({ navigation, route }) => ({
                        title: 'LIST OF BOOKS',
                        headerRight: (
                            <Button
                              buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
                              icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
                              onPress={() => { navigation.push('Add Book') }}
                            />
                        ),
                    })}
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