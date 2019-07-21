export const ADD_CREATURE = 'ADD_CREATURE'
export const REMOVE_CREATURE = 'REMOVE_CREATURE'

const addCreature = (creature, state) => {
  const updatedList = [...state.creatures]

  updatedList.push({ ...JSON.parse(JSON.stringify(creature)), id: Date.now() })

  return { ...state, creatures: updatedList }
}

const removeCreature = (creatureId, state) => {
  const updatedList = [...state.creatures]
  const removedCreatureIndex = updatedList.findIndex(
    creature => creature.id === creatureId
  )

  updatedList.splice(removedCreatureIndex, 1)

  return { ...state, creatures: updatedList }
}

const creatureListReducer = (state, action) => {
  switch (action.type) {
    case ADD_CREATURE:
      return addCreature(action.creature, state)
    case REMOVE_CREATURE:
      return removeCreature(action.creatureId, state)
    default:
      return state
  }
}

export { creatureListReducer }
