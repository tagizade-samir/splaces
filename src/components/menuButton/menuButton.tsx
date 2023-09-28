import React, {FC} from 'react'
import {Text, Pressable, StyleSheet} from 'react-native'

import {globalLayoutStyles, globalTextStyles} from '../../global'
import {darken} from '../../utils'

interface MenuButtonProps {
  handlePress: () => void
  handleLongPress: () => void
  color: string
  title: string
}

export const MenuButton: FC<MenuButtonProps> = ({handlePress, handleLongPress, color, title}) => {
  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={({pressed}) => [
        styles.buttonContainer,
        {backgroundColor: pressed ? darken(color, -10) : color},
      ]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    ...globalLayoutStyles.f1,
    ...globalLayoutStyles.centered,
  },
  buttonText: {
    ...globalTextStyles.h2Light,
  },
})
