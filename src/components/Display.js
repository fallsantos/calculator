import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default (props) => {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue}
             numberOfLines={1}>
                 {props.value}
             </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#4f4f4f',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#ffffff'
    }
})