import React from 'react'
import { Card, Button } from 'reactstrap'

import { TableauContext } from '../../context/GlobalState'

const CreatureCard = ({ creature }) => {
  let hpBlock = '0 / 0'
  if (creature.hit_points)
    hpBlock = (
      <div className="creature-card-hp">
        {creature.hit_points.current || 0} / {creature.hit_points.max || 0}
      </div>
    )
  const hpButtons = (
    <TableauContext.Consumer>
      {context => (
        <div className="creature-card-hp-buttons">
          <Button
            color="success"
            onClick={() =>
              context.setCreatureHP(creature.id, {
                current: creature.hit_points.current + 1
              })
            }
          >
            +
          </Button>
          <Button
            color="danger"
            onClick={() =>
              context.setCreatureHP(creature.id, {
                current: creature.hit_points.current - 1
              })
            }
          >
            -
          </Button>
        </div>
      )}
    </TableauContext.Consumer>
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
