import React, { useContext } from 'react'

import { AppContext } from '../../context/GlobalState'

const Abilities = () => {
  const context = useContext(AppContext)
  const { creature } = context.detail

  return (
    <dl className="row mb-0">
      <dt className="col-2">Skills</dt>
      <dd className="col-10">
        {creature.skills
          .map(
            skill =>
              `${skill.name} ${
                skill.value >= 0 ? `+${skill.value}` : skill.value
              }`
          )
          .join(', ')}
      </dd>
      <dt className="col-2">Senses</dt>
      <dd className="col-10">
        {creature.senses
          .map(sense => `${sense.name} ${sense.value}`)
          .join(', ')}
      </dd>
      <dt className="col-2">Languages</dt>
      <dd className="col-10">{creature.languages.join(', ')}</dd>
      <dt className="col-2">Challenge</dt>
      <dd className="col-10">
        {creature.challenge.value} ({creature.challenge.xp} XP)
      </dd>
    </dl>
  )
}

export default Abilities
