import React, { useContext } from 'react'
import { Card, Row, Col } from 'reactstrap'
import CreatureCard from '../CreatureCard'
import CreatureSelector from '../CreatureSelector'

import { TableauContext } from '../../context/GlobalState'

const Tableau = props => {
  const context = useContext(TableauContext)

  const content = (
    <React.Fragment>
      {context.creatures.map(creature => (
        <Col key={creature.id} xs={4} md={3}>
          <CreatureCard creature={creature} />
        </Col>
      ))}
    </React.Fragment>
  )

  return (
    <Card body>
      <Row className="d-flex align-items-stretch">
        {content}
        <Col xs={4} md={3}>
          <CreatureSelector />
        </Col>
      </Row>
    </Card>
  )
}

export default Tableau
