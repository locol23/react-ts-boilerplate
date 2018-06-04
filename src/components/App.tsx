import * as React from 'react'
import styled from 'styled-components'
import Contents from './Contents'

type Props = { text: string }

export default () => {
  const props: Props = { text: 'Hello React' }
  return(
    <Container>
      <Contents {...props} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
