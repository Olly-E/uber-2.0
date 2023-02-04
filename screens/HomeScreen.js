import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Let's build uber</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingLeft: 5,
    },
    text: {
        color: 'blue'
    }
})