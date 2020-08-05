import React from 'react';
import styled from 'styled-components';
import Title from './Components/Title';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Title />
    </Container>
  );
}

export default App;
