import React from 'react'
import { Card, Row, Col } from 'reactstrap'
import CreatureCard from '../CreatureCard'

import { TableauContext } from '../../context/GlobalState'

const Tableau = props => {
  return (
    <TableauContext.Consumer>
      {context => {
        let content = <div>No creatures...</div>
        if (context.creatures.length)
          content = (
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
            <Row className="d-flex align-items-stretch">{content}</Row>
          </Card>
        )
      }}
    </TableauContext.Consumer>
  )
}

export default Tableau
