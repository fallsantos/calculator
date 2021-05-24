import React, {setState} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { useState } from 'react/cjs/react.development'

export default (props) => {
    const [visible, setVisible] = useState('')
    return(
        <View style={styles.container}>
            <Text>Monetização</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#000000',
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#ffffff'
    }
})