import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  return (
    <View>
      <Text>Splash</Text>

      <Pressable onPress={() => Navig}>
          <Text>Oi</Text>
      </Pressable>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})