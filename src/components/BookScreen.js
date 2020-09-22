import React from 'react';
import {Button,  StyleSheet, View, Text } from 'react-native';

const BookScreen =(props) =>{

    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>Books List</Text>
             <Button
              title="Go to Details"
              onPress={() => props.navigation.navigate('Book Details')}
             />
             <Button
              title="Go to Add Book"
              onPress={() => props.navigation.navigate('Add Book')}
             />
             <Button
              title="Go to Edit Book"
              onPress={() => props.navigation.navigate('Edit Book')}
             />
            </View>
           );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    activity: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
   })

export default BookScreen;