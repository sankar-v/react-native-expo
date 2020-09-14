import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

//https://morioh.com/p/d06ded1f9387
const BookDetailScreen = (props) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Book Details</Text>
            <Button
                title="Go to Details... again"
                onPress={() => props.navigation.push('BookDetails')}
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
        paddingBottom: 20,
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
    detailButton: {
        marginTop: 10
    }
})

export default BookDetailScreen;