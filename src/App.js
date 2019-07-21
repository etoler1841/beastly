import React from 'react'

import GlobalState from './context/GlobalState'
import Tableau from './components/Tableau'

import { Container } from 'reactstrap'

const App = () => {
  return (
    <GlobalState>
      <Container className="App my-3">
        <Tableau />
      </Container>
    </GlobalState>
  )
}

export default App
