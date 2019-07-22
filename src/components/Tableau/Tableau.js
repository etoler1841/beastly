import React from 'react'
import { Card, Row, Col, Button } from 'reactstrap'
import CreatureCard from '../CreatureCard'

import { TableauContext } from '../../context/GlobalState'

const Tableau = props => {
  const content = (
    <TableauContext.Consumer>
      {context => {
        if (!context.creatures.length) return <div>No creatures...</div>
        return (
          <React.Fragment>
            {context.creatures.map(creature => (
              <Col key={creature.id} xs={4} md={3}>
                <CreatureCard creature={creature} />
              </Col>
            ))}
          </React.Fragment>
        )
      }}
    </TableauContext.Consumer>
  )

  const addCreatureButton = (
    <TableauContext.Consumer>
      {context => (
        <Col xs={4} md={3}>
          <Button
            color="success"
            onClick={() => context.addCreature('Goblin Gang Member')}
          >
            Add gang member
          </Button>
        </Col>
      )}
    </TableauContext.Consumer>
  )

  return (
    <Card body>
      <Row className="d-flex align-items-stretch">
        {content}
        {addCreatureButton}
      </Row>
    </Card>
  )
}

export default Tableau
