import React, { useEffect, useReducer } from 'react'

import creatureSrc from '../static/creatures'
import {
  creatureListReducer,
  ADD_CREATURE,
  REMOVE_CREATURE,
  SET_CREATURE_HP
} from './reducers'

const TableauContext = React.createContext()

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

  const setCreatureHP = (creatureId, params) => {
    for (let param in params) {
      dispatch({
        type: SET_CREATURE_HP,
        params: {
          creatureId,
          param,
          value: params[param]
        }
      })
    }
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
        removeCreature,
        setCreatureHP
      }}
    >
      {props.children}
    </TableauContext.Provider>
  )
}

export default GlobalState
export { TableauContext }
