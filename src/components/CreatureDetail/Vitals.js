import React, { useContext } from 'react'

import { AppContext } from '../../context/GlobalState'

const Vitals = () => {
  const context = useContext(AppContext)
  const { creature } = context.detail

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
      <dd className="col-10">{creature.speed} ft.</dd>
    </dl>
  )
}

export default Vitals
