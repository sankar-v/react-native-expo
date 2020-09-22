import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const AddBookScreen = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Add Book</Text>
            <Button
                title="Go to Add Book... again"
                onPress={() => props.navigation.push('Add Book')}
            />
            <Button
                title="Go to Home"
                onPress={() => props.navigation.navigate('Book')}
            />
            <Button
                title="Go back"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    subContainer: {
        flex: 1,
        marginBottom: 20,
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18,
        margin: 5,
    },
})

export default AddBookScreen;