import React, { useContext } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Vitals, Stats, Details, Abilities, Actions } from '.'

import { AppContext } from '../../context/GlobalState'

const CreatureDetail = () => {
  const context = useContext(AppContext)

  const close = () => context.setDetailOpen(false)

  if (!context.detail.creature) return null
  return (
    <Modal isOpen={context.detail.isOpen} toggle={close}>
      <ModalHeader toggle={close}>{context.detail.creature.name}</ModalHeader>
      <ModalBody>
        <Vitals />
        <Stats />
        <Details />
        <Abilities />
        <Actions />
      </ModalBody>
    </Modal>
  )
}

export default CreatureDetail
