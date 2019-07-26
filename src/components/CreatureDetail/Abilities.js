import React, { useContext } from 'react'

import { AppContext } from '../../context/GlobalState'

const Abilities = () => {
  const context = useContext(AppContext)
  const { creature } = context.detail

  return (
    <div>
      {creature.abilities.map(ability => (
        <p key={ability.name}>
          <strong>{ability.name}:</strong> {ability.description}
        </p>
      ))}
    </div>
  )
}

export default Abilities
