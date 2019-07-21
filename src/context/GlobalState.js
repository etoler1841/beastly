import React, { useEffect, useReducer } from 'react'

import creatureSrc from '../static/creatures'

import TableauContext from './tableau-context'
import { creatureListReducer, ADD_CREATURE, REMOVE_CREATURE } from './reducers'

const GlobalState = props => {
  const [creatureList, dispatch] = useReducer(creatureListReducer, {
    creatures: []
  })

  const addCreature = name => {
    const creature = creatureSrc.find(creature => creature.name === name)
    if (!creature) return

    dispatch({
      type: ADD_CREATURE,
      creature
    })
  }

  const removeCreature = creatureId => {
    dispatch({
      type: REMOVE_CREATURE,
      creatureId
    })
  }

  useEffect(() => {
    const defaultCreatures = ['Goblin Gang Member']
    defaultCreatures.map(creature => addCreature(creature))
  }, [])

  return (
    <TableauContext.Provider
      value={{
        creatures: creatureList.creatures,
        addCreature,
        removeCreature
      }}
    >
      {props.children}
    </TableauContext.Provider>
  )
}

export default GlobalState
