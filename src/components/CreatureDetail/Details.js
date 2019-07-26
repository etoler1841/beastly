import React, { useContext } from 'react'

import { AppContext } from '../../context/GlobalState'

const Details = () => {
  const context = useContext(AppContext)
  const { creature } = context.detail

  return (
    <dl className="row mb-0">
      {creature.skills ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : null}
      {creature.damage_resistances ? (
        <React.Fragment>
          <dt className="col-2">Damage Resistances</dt>
          <dd className="col-10">{creature.damage_resistances.join(', ')}</dd>
        </React.Fragment>
      ) : null}
      {creature.condition_immunities ? (
        <React.Fragment>
          <dt className="col-2">Condition Immunities</dt>
          <dd className="col-10">{creature.condition_immunities.join(', ')}</dd>
        </React.Fragment>
      ) : null}
      {creature.senses ? (
        <React.Fragment>
          <dt className="col-2">Senses</dt>
          <dd className="col-10">
            {creature.senses
              .map(sense => `${sense.name} ${sense.value}`)
              .join(', ')}
          </dd>
        </React.Fragment>
      ) : null}
      <dt className="col-2">Languages</dt>
      <dd className="col-10">
        {creature.languages.length ? creature.languages.join(', ') : '&mdash;'}
      </dd>
      <dt className="col-2">Challenge</dt>
      <dd className="col-10">
        {creature.challenge.value} ({creature.challenge.xp} XP)
      </dd>
    </dl>
  )
}

export default Details
