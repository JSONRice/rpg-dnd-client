import {useDisclosure} from '@chakra-ui/hooks'
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from '@chakra-ui/react'
import React from 'react'

export const DescriptionModal = ({description}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Detailed Description</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <p>{description}</p>
        </ModalBody>
      </ModalContent>
    </Modal>

  )
}

