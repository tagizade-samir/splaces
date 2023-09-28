import {Toast, ToastDescription, ToastTitle, VStack} from '@gluestack-ui/themed'
import React, {FC} from 'react'

interface WarningProps {
  id: string
  title: string
  text: string
}

export const Warning: FC<WarningProps> = ({id, title, text}) => {
  return (
    <Toast nativeID={id} action="warning" variant="accent">
      <VStack space="xs">
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{text}</ToastDescription>
      </VStack>
    </Toast>
  )
}
