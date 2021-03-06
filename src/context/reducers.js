export const ADD_CREATURE = 'ADD_CREATURE'
export const REMOVE_CREATURE = 'REMOVE_CREATURE'
export const SET_CREATURE_HP = 'SET_CREATURE_HP'

const roll = (dice, modifier = 0) => {
  const val = dice.reduce((total, die) => {
    const rand = Math.ceil(Math.random() * die)
    return total + rand
  }, 0)
  const result = val + modifier
  return result
}

const addCreature = (creature, state) => {
  const updatedList = [...state.creatures]

  const hp = roll(
    creature.hit_points.roll.dice,
    creature.hit_points.roll.modifier
  )

  updatedList.push({
    ...JSON.parse(JSON.stringify(creature)),
    id: Date.now(),
    hit_points: { ...creature.hit_points, current: hp, max: hp }
  })

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

const setCreatureHP = (params, state) => {
  const updatedList = [...state.creatures]
  const updatedCreatureIndex = updatedList.findIndex(
    creature => creature.id === params.creatureId
  )
  const updatedHP = updatedList[updatedCreatureIndex].hit_points

  updatedHP[params.param] = params.value

  return { ...state, creatures: updatedList }
}

const creatureListReducer = (state, action) => {
  switch (action.type) {
    case ADD_CREATURE:
      return addCreature(action.creature, state)
    case REMOVE_CREATURE:
      return removeCreature(action.creatureId, state)
    case SET_CREATURE_HP:
      return setCreatureHP(action.params, state)
    default:
      return state
  }
}

export { creatureListReducer }
