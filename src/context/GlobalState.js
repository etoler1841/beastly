import React, { useState, useEffect, useReducer } from 'react'
import CreatureDetail from '../components/CreatureDetail'

import creatureSrc from '../static/creatures'
import {
  creatureListReducer,
  ADD_CREATURE,
  REMOVE_CREATURE,
  SET_CREATURE_HP
} from './reducers'

const AppContext = React.createContext()

const GlobalState = props => {
  const [creatureList, dispatch] = useReducer(creatureListReducer, {
    creatures: []
  })
  const [detail, setDetail] = useState({
    creature: null,
    isOpen: false
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

  const showCreatureDetail = creatureId => {
    const creature = creatureList.creatures.find(
      creature => creature.id === creatureId
    )

    setDetail({ creature, isOpen: true })
  }

  const setDetailOpen = val => {
    setDetail({ ...detail, isOpen: Boolean(val) })
  }

  useEffect(() => {
    const defaultCreatures = ['Goblin Gang Member']
    defaultCreatures.map(creature => addCreature(creature))
  }, [])

  return (
    <AppContext.Provider
      value={{
        creatures: creatureList.creatures,
        detail,
        addCreature,
        removeCreature,
        setCreatureHP,
        showCreatureDetail,
        setDetailOpen
      }}
    >
      {props.children}
      <CreatureDetail />
    </AppContext.Provider>
  )
}

export default GlobalState
export { AppContext }
