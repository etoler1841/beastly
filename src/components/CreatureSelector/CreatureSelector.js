import React, { useState, useContext } from 'react'
import { Modal, ModalHeader, ModalBody, Button, Input } from 'reactstrap'

import { TableauContext } from '../../context/GlobalState'

import creatures from '../../static/creatures'

const CreatureSelector = props => {
  const context = useContext(TableauContext)

  const [isOpen, setIsOpen] = useState(false)
  const [selectedCreature, setSelectedCreature] = useState('')

  const addSelectedCreature = () => {
    if (!selectedCreature) return
    context.addCreature(selectedCreature)
    setIsOpen(false)
  }

  const addCreatureButton = (
    <Button
      color="success"
      onClick={addSelectedCreature}
      disabled={!selectedCreature}
    >
      Add Creature
    </Button>
  )

  const selector = (
    <Input type="select" onChange={e => setSelectedCreature(e.target.value)}>
      <option value="">Choose...</option>
      {creatures.map(creature => (
        <option key={creature.name} value={creature.name}>
          {creature.name}
        </option>
      ))}
    </Input>
  )

  return (
    <React.Fragment>
      <Button color="success" onClick={() => setIsOpen(true)}>
        +
      </Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
        <ModalHeader toggle={() => setIsOpen(false)}>
          Add New Creature
        </ModalHeader>
        <ModalBody>
          {selector}
          {addCreatureButton}
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default CreatureSelector
