import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface LoadingMessageProps {
  message: string,
}

export const LoadingMessage = ({ message }: LoadingMessageProps) => (
  <View style={styles.container}>
    <Text style={styles.message}>
      {message}
    </Text>
  </View>
)