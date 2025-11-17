import './styles/theme.css';
import './styles/global.css';
import './components/Heading';
import './components/Container';
import { Heading } from './components/Heading';
import { Container } from './components/Container';

export default function App() {
  return (
    <>
      <Container>
        <Heading>HOME</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORM</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}
