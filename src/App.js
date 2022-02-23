import styled from '@emotion/styled'
import NameList from './components/NameList';

const Container = styled.div(props => ({
  display: 'flex',
  padding: '150px 100px',
}))

const Button = styled.button(props => ({
  color: props.primary && 'red'
}))

function App() {
  return (
    <>
      <Container>
        <NameList />
      </Container>
    </>
  );
}

export default App;