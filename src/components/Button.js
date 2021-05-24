import React from 'react'

import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

export default props => {
    const stylesButton = [styles.button]

    if(props.db) stylesButton.push(styles.dbButton)
    if(props.tp) stylesButton.push(styles.tpButton)
    if(props.op) stylesButton.push(styles.opButton)
    
    
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>      
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 15,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888888'
    },

    opButton: {
        color: '#ffffff',
        backgroundColor: '#fa8231',
    },

    dbButton: {
        width: (Dimensions.get('window').width / 4) * 2,
    },

    tpButton: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})