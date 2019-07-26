import React, { useContext } from 'react'

import { AppContext } from '../../context/GlobalState'

const Vitals = () => {
  const context = useContext(AppContext)
  const { creature } = context.detail

  const buildCreatureSpeed = speed => {
    if (typeof speed === 'object') {
      const speeds = []
      for (let type in speed) {
        speeds.push(
          type === 'default'
            ? `${speed[type]} ft.`
            : `${type} ${speed[type]} ft.`
        )
      }
      return speeds.join(', ')
    } else {
      return `${speed} ft.`
    }
  }

  return (
    <dl className="row mb-0">
      <dt className="col-2">AC</dt>
      <dd className="col-10">
        {creature.armor.class} ({creature.armor.type})
      </dd>
      <dt className="col-2">HP</dt>
      <dd className="col-10">
        {creature.hit_points.current} / {creature.hit_points.max}
      </dd>
      <dt className="col-2">Speed</dt>
      <dd className="col-10">{buildCreatureSpeed(creature.speed)}</dd>
    </dl>
  )
}

export default Vitals
