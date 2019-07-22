import React, { useContext } from 'react'
import { Row, Col, Button } from 'reactstrap'

import { TableauContext } from '../../context/GlobalState'

const HPGauge = ({ creature }) => {
  const context = useContext(TableauContext)

  let hpBlock = '0 / 0'
  if (creature.hit_points)
    hpBlock = (
      <div className="creature-card-hp">
        {creature.hit_points.current || 0} / {creature.hit_points.max || 0}
      </div>
    )

  return (
    <React.Fragment>
      {hpBlock}
      <Row className="creature-card-hp-buttons my-2" noGutters>
        <Col sx={6}>
          <Button
            color="success"
            className="py-0 px-2"
            onClick={() =>
              context.setCreatureHP(creature.id, {
                current: creature.hit_points.current + 1
              })
            }
          >
            +
          </Button>
        </Col>
        <Col sx={6}>
          <Button
            color="danger"
            className="py-0 px-2"
            onClick={() =>
              context.setCreatureHP(creature.id, {
                current: creature.hit_points.current - 1
              })
            }
          >
            -
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default HPGauge
