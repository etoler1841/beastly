import React, { useContext } from 'react'
import { Card, Button } from 'reactstrap'
import { HPGauge } from '.'

import { AppContext } from '../../context/GlobalState'

const CreatureCard = ({ creature }) => {
  const context = useContext(AppContext)

  return (
    <Card
      className="text-center p-2 d-flex flex-direction-column justify-content-between"
      style={{ height: '100%' }}
      body
    >
      <div className="creature-card-name">
        {creature.name || 'Unknown Creature'}
      </div>
      <HPGauge creature={creature} />
      <div>
        <Button
          color="info"
          className="p-1"
          onClick={() => context.showCreatureDetail(creature.id)}
          block
        >
          View
        </Button>
        <Button
          color="secondary"
          className="p-1"
          onClick={() => context.removeCreature(creature.id)}
          block
        >
          Remove
        </Button>
      </div>
    </Card>
  )
}

export default CreatureCard
