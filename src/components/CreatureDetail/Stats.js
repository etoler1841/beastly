import React, { useContext } from 'react'
import { Row, Col, Card } from 'reactstrap'

import { AppContext } from '../../context/GlobalState'

const Stats = () => {
  const context = useContext(AppContext)
  const { stats } = context.detail.creature

  const statBlocks = []
  for (let stat in stats) {
    statBlocks.push(
      <Col sm={2} xs={4} key={stat}>
        <Card className="p-1 text-center" body>
          <div>
            <strong>{stat.toUpperCase()}</strong>
          </div>
          <div>{stats[stat]}</div>
          <div>({Math.floor((stats[stat] - 10) / 2)})</div>
        </Card>
      </Col>
    )
  }

  return <Row noGutters>{statBlocks}</Row>
}

export default Stats
