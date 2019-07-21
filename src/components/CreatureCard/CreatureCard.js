import React from 'react'
import { Card, Button } from 'reactstrap'

const CreatureCard = ({ creature }) => {
  let hpBlock = '0 / 0'
  if (creature.hit_points)
    hpBlock = (
      <div className="creature-card-hp">
        {creature.hit_points.current || 0} / {creature.hit_points.max || 0}
      </div>
    )
  const hpButtons = (
    <div className="creature-card-hp-buttons">
      <Button color="success" className="p-2">
        +
      </Button>
      <Button color="danger" className="p-2">
        -
      </Button>
    </div>
  )

  return (
    <React.Fragment>
      <Card
        className="text-center p-2 d-flex flex-direction-column justify-content-between"
        style={{ height: '100%' }}
        body
      >
        <div className="creature-card-name">
          {creature.name || 'Unknown Creature'}
        </div>
        {hpBlock}
        {hpButtons}
      </Card>
    </React.Fragment>
  )
}

export default CreatureCard
