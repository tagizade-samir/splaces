import {
  Button,
  ButtonText,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@gluestack-ui/themed'
import React, {FC} from 'react'

interface HomeItemsModalProps {
  open: boolean
  onClose: () => void
  title: string
  text: string
}

export const HomeItemsModal: FC<HomeItemsModalProps> = ({open, onClose, title, text}) => {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">{title}</Heading>
        </ModalHeader>
        <ModalBody>
          <Text>{text}</Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" size="md" action="secondary" mr="$3" onPress={onClose}>
            <ButtonText>Close</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
